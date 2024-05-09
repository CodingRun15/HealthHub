import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import '../css/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <img className='logo' src={logo} alt="HealthHub logo" />
                </Link>
                <div className="menues">
                    <Link className="menu" to="/appointments">Book Appointment</Link>
                    <Link className="menu" to="/help">Help</Link>
                    <Link className="menu" to="/features">Features</Link>
                    <button className="loginbtn">
                        <Link className="login-menu" to="/login">Login</Link>
                    </button>
                </div>
            </nav>
        </>
    )
}

export { Navbar }