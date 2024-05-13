import '../components/User-Details.css'

const UserDetailsList = () => {
    // Example user details list
    const userDetailsList = [
        { id: 1, name: 'Naman Bansal', age: 25, email: 'naman@gmail.com' },
    ];

    return (
        <div className="user-details-list">
            <h2>User Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userDetailsList.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetailsList;
