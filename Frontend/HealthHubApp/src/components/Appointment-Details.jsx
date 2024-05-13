import '../components/Appointment-Details.css';

const AppointmentDetails = () => {
    const appointmentDetails = [
        { id: 1, doctorDepartment: 'Cardiology', doctorName: 'Dr. Smith', appointmentTime: '10:00 AM' },
        { id: 2, doctorDepartment: 'Dermatology', doctorName: 'Dr. Johnson', appointmentTime: '11:30 AM' },
    ];

    return (
        <div className="appointment-details">
            <h2>Appointment Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Doctor Department</th>
                        <th>Doctor Name</th>
                        <th>Appointment Time</th>
                    </tr>
                </thead>
                <tbody>
                    {appointmentDetails.map(appointment => (
                        <tr key={appointment.id}>
                            <td>{appointment.id}</td>
                            <td>{appointment.doctorDepartment}</td>
                            <td>{appointment.doctorName}</td>
                            <td>{appointment.appointmentTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentDetails;
