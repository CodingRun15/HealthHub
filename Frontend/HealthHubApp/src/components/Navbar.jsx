import { Link } from 'react-router-dom';
import logo from '../assets/blue-logo.png';
import '../css/navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false); // State to track whether menu is active or not

    const toggleMenu = () => {
        setIsActive(!isActive); // Toggle the state when hamburger button is clicked
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
                    <button className="loginbtn">
                        <Link className="login-menu" to="/login">Login</Link>
                    </button>
                </div>
                <button className="hamburger-btn" onClick={toggleMenu}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </nav>
    );
}

export { Navbar };
