import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../components/React-LineGraph.css'; // Import CSS file

const LineGraph = ({ numberOfAppointments }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Keep track of the chart instance

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Destroy previous chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create new chart instance
        chartInstance.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Department',
                    data: [2, 1, 3, 2, 3, 1, 1],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="line-graph-container">
            <h2>Department Analytics</h2>
            <p>Number of Appointments: {numberOfAppointments}</p>
            <canvas className="line-graph" ref={chartRef} />
        </div>
    );
};

export default LineGraph;
