import { Link } from 'react-router-dom'
import logo from '../assets/blue-logo.png';
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <img className='logo' src={logo} alt="HealthHub logo" />
                </Link>
                <div className="menues">
                    <Link className="menu" to="/appointments">Book Appointment</Link>
                    <Link className="menu" to="/dashboard">Dashboard</Link>
                    <button className="loginbtn">
                        <Link className="login-menu" to="/login">Login</Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export { Navbar }