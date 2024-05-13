import { useState } from 'react';
import '../components/React-Calendar.css';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getMonthData = (year, month) => {
        const firstDay = new Date(year, month).getDay();
        const totalDays = daysInMonth(month, year);
        const monthData = [];
        let day = 1;

        for (let i = 0; i < 6; i++) {
            const week = [];
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    week.push('');
                } else if (day > totalDays) {
                    break;
                } else {
                    week.push(day);
                    day++;
                }
            }
            monthData.push(week);
        }

        return monthData;
    };

    const handleDateClick = (day) => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
    };

    const renderCalendar = () => {
        const monthData = getMonthData(selectedDate.getFullYear(), selectedDate.getMonth());

        return (
            <table className="calendar">
                <thead>
                    <tr>
                        <th className="calendar-day">Sun</th>
                        <th className="calendar-day">Mon</th>
                        <th className="calendar-day">Tue</th>
                        <th className="calendar-day">Wed</th>
                        <th className="calendar-day">Thu</th>
                        <th className="calendar-day">Fri</th>
                        <th className="calendar-day">Sat</th>
                    </tr>
                </thead>
                <tbody>
                    {monthData.map((week, i) => (
                        <tr key={i}>
                            {week.map((day, j) => (
                                <td
                                    key={j}
                                    onClick={() => handleDateClick(day)}
                                    className={day === selectedDate.getDate() ? 'calendar-day selected' : 'calendar-day'}
                                >
                                    {day}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="container-calendar">
            <h2>Appointment Calendar</h2>
            {renderCalendar()}
        </div>
    );
};

export default Calendar;
