import AppointmentDetails from '../components/Appointment-Details';
import BarGraph from '../components/React-BarGraph';
import Calendar from '../components/React-Calendar';
import LineGraph from '../components/React-LineGraph';
import UserDetailsList from '../components/User-Details';
import '../css/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="body-container-dash">
            <div className="container-dash">
                {/* Calendar and Appointment Details */}
                <div className="container-item">
                    <div className="container-calendar">
                        <Calendar />
                    </div>
                    <div className="container-user">
                        <AppointmentDetails />
                    </div>
                </div>
                
                {/* User Details and Bar Graph */}
                <div className="container-item">
                    <div className="container-list">
                        <UserDetailsList />
                    </div>
                    <div className="container-bar">
                        <BarGraph />
                    </div>
                </div>
                
                {/* Line Graph */}
                <div className="container-item">
                    <div className="container-line">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Dashboard };
