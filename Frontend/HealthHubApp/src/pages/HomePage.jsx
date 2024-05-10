import { Link } from 'react-router-dom';
import '../css/homepage.css'
const HomePage = () => {
    return (
        <>
            <div className="header">
                <div className='header-content'>
                    <img src="\src\assets\header-logo.png" alt="HealthHub logo" />
                    <p>Your secure online health connection</p>
                    <h1>Empowring over 185 million patients <br /> to get and stay healthy</h1>
                    <button>
                        <Link className="login-menu" to="/login">Access HealthHub</Link>
                    </button>
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
                    <img src="\src\assets\myhealth-mobileimg.png" alt="covid-vaccine" />
                </div>
                <div className='text-content'>
                    <img src="/src/assets/beaker.png" alt="" />
                    <img src="/src/assets/medications.png" alt="" />
                    <img src="/src/assets/note.png" alt="" />
                    <h1>All your health information
                        in one place</h1>
                    <p>See your medications, test results, upcoming appointments, medical bills, price estimates, and more all in one place, even if you have been seen at multiple healthcare organizations.</p>
                    <button className='learnMore-btn'>Learn More</button>
                </div>
            </div>

            <div className='medicalRecord'>
                <div className='medicalRecord-content'>
                    <div className='text-content'>
                        <img src="\src\assets\chart.png" alt="" />
                        <img src="\src\assets\clipboard.png" alt="" />
                        <img src="\src\assets\health_card.png" alt="" />
                        <h1>Share your medical record safely and securely</h1>
                        <p>Share your medical record with anyone who needs it. Most of your healthcare providers can already get the information they need, but if they cannot, you have the power to share your record on the spot.</p>
                        <button className='learnMore-btn'>Learn More</button>
                    </div>
                    <div className='patient-doctor-img'>
                        <img src="\src\assets\Patient-BG-Providers.png" alt="covid-vaccine" />
                    </div>
                </div>
            </div>

            <div className='appointment'>
                <div className='appointment-section'>
                    <div className='patient-appointment-img'>
                        <img src="\src\assets\FindCareUser.png" alt="" />
                    </div>
                    <div className='text-content'>
                        <img src="\src\assets\map.png" alt="" />
                        <img src="\src\assets\calendar.png" alt="" />
                        <h1>Quickly schedule appointments and find care</h1>
                        <p>Make appointments at your convenience, complete pre-visit tasks from home, and find the nearest urgent care or emergency room when you need it.</p>
                    </div>
                    <div className='schedule-app-img'>
                        <img src="\src\assets\FindCareDevice.png" alt="FindCareDevice" />
                    </div>
                </div>
            </div>


            <div className='connect-doctor'>
                <div className='connect-doctor-section'>
                    <div className='connectfromhome-img'>
                        <img src="\src\assets\ConnectFromHome.png" alt="" />
                    </div>
                    <div className='text-content'>
                        <img src="\src\assets\doctor.png" alt="" />
                        <img src="\src\assets\speech_bubble_with_video.png" alt="" />
                        <h1>Connect with a doctor no matter where you are</h1>
                        <p>Send a message, get online diagnosis and treatment, talk face-to-face over video, or arrange to follow up with a doctor in person, depending on the level of care you need.</p>
                    </div>
                    <div className='connectfromwork-img'>
                        <img src="\src\assets\ConnectFromWork.png" alt="FindCareDevice" />
                    </div>
                </div>
            </div>

            <div className='footer-section'>
                <div className='footer'>
                    <div className='epic'>
                        <img src="\src\assets\epic-med.png" alt="" />
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
                            <img src="\src\assets\app-store.png" alt="" /><br />
                            <img src="\src\assets\google-play.png" alt="" />
                        </div>
                    </div>
                </div>
                <p className='privacy-policy'><b>We use site visitor information to improve your browsing experience and this site as described in <span>our privacy policy.</span></b></p>
            </div>
        </>
    );
};

export { HomePage };
