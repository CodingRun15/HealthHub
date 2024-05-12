import { useState } from 'react';
import axios from 'axios';
import '../css/bookAppointment.css'
const token = localStorage.getItem('token');
console.log(token);
const BookAppointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        department: '',
        doctor: '',
        date: '',
        time: '',
        file: null // Adjusted to handle file input correctly
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        // If the input is a file, set the file property
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
            // Append each form field to formDataToSend
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            const response = await axios.post('https://healthhub-sug1.onrender.com/user/appointments/bookapp', formDataToSend,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                  }
                }
            );
            console.log(response.data);
            // Clear form data after successful submission
            setFormData({
                name: '',
                age: '',
                department: '',
                doctor: '',
                date: '',
                time: '',
                file: null
            });
        } catch (error) {
            console.error('Error submitting appointment:', error);
            // You might want to provide user feedback about the error here
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
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your Name"/>
                    </div>
                    <div>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Enter Age" />
                    </div>
                    <div>
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="">Select Department</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Neurology">Neurology</option>
                            {/* Add other department options */}
                        </select>
                    </div>
                    <div>
                        <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleChange}
                        >
                            <option value="">Select Doctor</option>
                            <option value="Dr. John Doe">Dr. John Doe</option>
                            <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                            {/* Add other doctor options */}
                        </select>
                    </div>
                    <div>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Enter Date" />
                    </div>
                    <div>
                        <input type="time" name="time" value={formData.time} onChange={handleChange} placeholder="Enter Time" />
                    </div>
                    <div className='fileinput'>
                        <input type='file' name="file" onChange={handleChange} />
                    </div>
                    <button type="submit">Book Appointment</button>
                </form>
            </div>
        </div>
    );
};

export {BookAppointment};
