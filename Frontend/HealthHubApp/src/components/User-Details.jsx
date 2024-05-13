import '../components/User-Details.css';

const UserDetailsList = () => {
    const userDetailsList = [
        { name: 'Harsh Kumar', age: 25, email: 'harshbaliyan2@gmail.com', bloodgroup: 'A+', disease: 'Low BP' },
    ];

    return (
        <div className="user-details-list">
            <h2 style={{ color: '#003a80' }}>My Details</h2>
            <div className="grid-container">
                {userDetailsList.map(user => (
                    <div key={user.id} className="user-details-item">
                        <div className="detail-section">
                            <p><span>Name:</span> {user.name}</p>
                        </div>
                        <div className="detail-section">
                            <p><span>Age:</span> {user.age}</p>
                        </div>
                        <div className="detail-section">
                            <p><span>Email:</span> {user.email}</p>
                        </div>
                        <div className="detail-section">
                            <p><span>Blood-Group:</span> {user.bloodgroup}</p>
                        </div>
                        <div className="detail-section">
                            <p><span>Disease:</span> {user.disease}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDetailsList;
