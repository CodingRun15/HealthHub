import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/blue-logo.png';
import '../css/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
    return (
        <nav className="navbar">
            <Link to="/">
                <img className='logo' src={logo} alt="HealthHub logo" />
            </Link>
           
            <div>
                <div className={`menues ${isActive ? 'active' : ''}`}>
                    <Link className="menu" to="/appointments">Book Appointment</Link>
                    <Link className="menu" to="/dashboard">Dashboard</Link>
                    {user ? (
                        <>
                            <div style={{display:'flex', justifyContent:'center',alignItems:'center', gap:'10px'}}>
                            <h2>Welcome, {user.username}</h2>
                            <button className="loginbtn" onClick={handleLogout}>Logout</button>
                            </div>
                        </>
                    ) : (
                        <button className="loginbtn">
                            <Link className="login-menu" to="/login">Login</Link>
                        </button>
                    )}

                </div>
                <button className="hamburger-btn" onClick={toggleMenu}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}

export { Navbar };
