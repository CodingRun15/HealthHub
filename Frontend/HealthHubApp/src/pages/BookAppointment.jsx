import { useState } from 'react';
import axios from 'axios';
import '../css/bookAppointment.css';
const token = localStorage.getItem('token');
const initialState = {
    name: '',
    age: '',
    department: '',
    doctor: '',
    date: getCurrentDate(),
    time: '',
    file: null
};
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}
const BookAppointment = () => {
    const [formData, setFormData] = useState(initialState);
    const [selectedDepartment, setSelectedDepartment] = useState("");

    const departments = [
        {
            name: "Cardiology",
            doctors: [
                { id: 1, name: "Dr. John Smith", slots: ['10:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 2, name: "Dr. Emily Johnson", slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 3, name: "Dr. Michael Lee", slots: ['8:00 AM', '11:00 AM', '3:00 PM'] }
            ]
        },
        {
            name: "Neurology",
            doctors: [
                { id: 4, name: "Dr. Sarah Davis", slots: ['10:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 5, name: "Dr. William Brown", slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 6, name: "Dr. Jessica Wilson", slots: ['8:00 AM', '11:00 AM', '3:00 PM'] }
            ]
        },
        {
            name: "Dermatology",
            doctors: [
                { id: 7, name: "Dr. Emma Garcia", slots: ['10:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 8, name: "Dr. David Martinez", slots: ['9:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 9, name: "Dr. Sophia Anderson", slots: ['8:00 AM', '11:00 AM', '3:00 PM'] }
            ]
        },
        {
            name: "Ophthalmology",
            doctors: [
                { id: 10, name: "Dr. Olivia Robinson", slots: ['10:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 11, name: "Dr. Daniel White", slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 12, name: "Dr. Ava Harris", slots: ['8:00 AM', '10:00 AM', '3:00 PM'] }
            ]
        },
        {
            name: "Orthopedics",
            doctors: [
                { id: 13, name: "Dr. Ethan Taylor", slots: ['10:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 14, name: "Dr. Mia Martinez", slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 15, name: "Dr. Noah Clark", slots: ['8:00 AM', '11:00 AM', '3:00 PM'] }
            ]
        },
        {
            name: "Pediatrics",
            doctors: [
                { id: 16, name: "Dr. Isabella Rodriguez", slots: ['10:00 AM', '11:00 AM', '1:00 PM'] },
                { id: 17, name: "Dr. Lucas Wilson", slots: ['9:00 AM', '12:00 PM', '2:00 PM'] },
                { id: 18, name: "Dr. Mia Thomas", slots: ['8:00 AM', '11:00 AM', '3:00 PM'] }
            ]
        },
    ];

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
        setFormData(prevState => ({
            ...prevState,
            department: event.target.value,
            doctor: ''
        }));
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === 'file' ? files[0] : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            const response = await axios.post('https://healthhub-sug1.onrender.com/user/appointments/bookapp', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            alert("Appointment created successfully !!")
            console.log(response.data);
            setFormData(initialState);
        } catch (error) {
            console.error('Error submitting appointment:', error);
        }
    };
    return (
        <div className='main'>
            <div className='appointment-img'>
                <img src="/src/assets/appointment.jpg" alt="Appointment" />
            </div>
            <div className='appointment-form'>
                <h2>Make your Appointment</h2>
                <form encType="multipart/form-data" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name" required/>
                    </div>
                    <div>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" required/>
                    </div>
                    <select
                        name="department"
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        required
                    >
                        <option value="">Select Department</option>
                        {departments.map(department => (
                            <option key={department.name} value={department.name}>{department.name}</option>
                        ))}
                    </select>
                    <br />
                    <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Doctor</option>
                        {selectedDepartment && departments.find(department => department.name === selectedDepartment)?.doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                        ))}
                    </select>
                    <div>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Enter Date" min={getCurrentDate()} required/>
                    </div>
                    <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Time Slot</option>
                        {selectedDepartment && departments.find(department => department.name === selectedDepartment)?.doctors
                            .find(doctor => doctor.name === formData.doctor)?.slots.map(slot => (
                                <option key={slot} value={slot}>{slot}</option>
                            ))}
                    </select>
                    <div className='fileinput'>
                        <input type='file' name="file" onChange={handleChange} />
                    </div>
                    <button type="submit">Book Appointment</button>
                </form>
            </div>
        </div>
    );
};

export { BookAppointment };