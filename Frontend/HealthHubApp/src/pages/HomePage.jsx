import { Link, useNavigate } from 'react-router-dom';
import '../css/homepage.css'
const HomePage = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };
    return (
        <>
            <div className="navbar">
                <div className="navbar-content">
                    <img src="./public/header-logo.png" alt="HealthHub logo" />
                    {user ? (
                        <>
                            <p>Welcome, {user.username}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <Link className="login-menu" to="/login">Login</Link>
                    )}
                </div>
            </div>

            {/* <div className='covid'>
                <div className='covid-content'>
                    <div className='text-content'>
                        <img src="/src/assets/circlewithprongs.svg" alt="" />
                        <img src="/src/assets/vaccination.svg" alt="" />
                        <h1>Stay ahead of COVID-19</h1>
                        <p>Schedule an appointment for the COVID-19 vaccine as soon as you are eligible and access your testing and vaccination status anytime, anywhere.</p>
                        <button className='learnMore-btn'>Learn More</button>
                    </div>
                    <div className='covid-vaccination'>
                        <img src="\src\assets\covid-vaccine.png" alt="covid-vaccine" />
                    </div>
                </div>
    </div>*/}
            <div className='healthInfo'>
                <div className='mobile-image'>
                    <img src="./public/myhealth-mobileimg.png" alt="covid-vaccine" />
                </div>
                <div className='text-content'>
                    <img src="./public/beaker.png" alt="" />
                    <img src="./public/medications.png" alt="" />
                    <img src="./public/note.png" alt="" />
                    <h1>All your health information
                        in one place</h1>
                    <p>See your medications, test results, upcoming appointments, medical bills, price estimates, and more all in one place, even if you have been seen at multiple healthcare organizations.</p>
                    <button className='learnMore-btn'>Learn More</button>
                </div>
            </div>

            <div className='medicalRecord'>
                <div className='medicalRecord-content'>
                    <div className='text-content'>
                        <img src="./public/chart.png" alt="" />
                        <img src="./public/clipboard.png" alt="" />
                        <img src="./public/health_card.png" alt="" />
                        <h1>Share your medical record safely and securely</h1>
                        <p>Share your medical record with anyone who needs it. Most of your healthcare providers can already get the information they need, but if they cannot, you have the power to share your record on the spot.</p>
                        <button className='learnMore-btn'>Learn More</button>
                    </div>
                    <div className='patient-doctor-img'>
                        <img src="./public/Patient-BG-Providers.png" alt="covid-vaccine" />
                    </div>
                </div>
            </div>

            <div className='appointment'>
                <div className='appointment-section'>
                    <div className='patient-appointment-img'>
                        <img src="./public/FindCareUser.png" alt="" />
                    </div>
                    <div className='text-content'>
                        <img src="./public/map.png" alt="" />
                        <img src="./public/calendar.png" alt="" />
                        <h1>Quickly schedule appointments and find care</h1>
                        <p>Make appointments at your convenience, complete pre-visit tasks from home, and find the nearest urgent care or emergency room when you need it.</p>
                    </div>
                    <div className='schedule-app-img'>
                        <img src="./public/FindCareDevice.png" alt="FindCareDevice" />
                    </div>
                </div>
            </div>


            <div className='connect-doctor'>
                <div className='connect-doctor-section'>
                    <div className='connectfromhome-img'>
                        <img src="./public/ConnectFromHome.png" alt="" />
                    </div>
                    <div className='text-content'>
                        <img src="./public/doctor.png" alt="" />
                        <img src="./public/speech_bubble_with_video.png" alt="" />
                        <h1>Connect with a doctor no matter where you are</h1>
                        <p>Send a message, get online diagnosis and treatment, talk face-to-face over video, or arrange to follow up with a doctor in person, depending on the level of care you need.</p>
                    </div>
                    <div className='connectfromwork-img'>
                        <img src="./public/ConnectFromWork.png" alt="FindCareDevice" />
                    </div>
                </div>
            </div>

            <div className='footer-section'>
                <div className='footer'>
                    <div className='epic'>
                        <img src="./public/epic-med.png" alt="" />
                        <p>MyChart is powered by Epic, the software system used by the worlds best healthcare organizations.</p>
                    </div>
                    <div className='footer-right'>
                        <div className='site-map'>
                            <h4>SITE MAP</h4>
                            <ul>
                                <li><Link to="/login">Access HealthHub</Link></li>
                                <li><Link to="/appointments">Book Appointment</Link></li>
                                <li><Link to="/dashboard">Dashboard</Link></li>
                            </ul>
                        </div>
                        <div className='getapp'>
                            <h4>GET THE APP</h4>
                            <img src="./public/app-store.png" alt="" /><br />
                            <img src="./public/google-play.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className='privacy-policy'><b>We use site visitor information to improve your browsing experience and this site as described in <span>our privacy policy.</span></b></p>
            </div>
        </>
    );
};

export { HomePage };