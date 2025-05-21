import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import './visualization.css';

const Visualization = ({ formData }) => {
    const thresholds = {
        cp: 2, trestbps: 140, chol: 200, fbs: 120, restecg: 1,
        thalach: 120, exang: 1, oldpeak: 1, slope: 1, ca: 2, thal: 1
    };

    const data = [
        { name: 'Chest Pain Type (CP)', threshold: thresholds.cp, value: formData.cp },
        { name: 'Resting BP', threshold: thresholds.trestbps, value: formData.trestbps },
        { name: 'Cholesterol', threshold: thresholds.chol, value: formData.chol },
        { name: 'Fasting Blood Sugar', threshold: thresholds.fbs, value: formData.fbs },
        { name: 'Resting ECG', threshold: thresholds.restecg, value: formData.restecg },
        { name: 'Max Heart Rate', threshold: thresholds.thalach, value: formData.thalach },
        { name: 'Exercise Induced Angina', threshold: thresholds.exang, value: formData.exang },
        { name: 'Oldpeak', threshold: thresholds.oldpeak, value: formData.oldpeak },
        { name: 'Slope', threshold: thresholds.slope, value: formData.slope },
        { name: 'Major Vessels', threshold: thresholds.ca, value: formData.ca },
        { name: 'Thalassemia', threshold: thresholds.thal, value: formData.thal },
    ];

    const barData = data.map(entry => {
        const { value, threshold, name: entryName } = entry;
        let normalValue, criticalValue;

        if (entryName === 'Max Heart Rate') {
            normalValue = value >= threshold ? value : 0;
            criticalValue = value < threshold ? value : 0;
        } else {
            normalValue = Math.min(value, threshold);
            criticalValue = value > threshold ? value - threshold : 0;
        }

        return { name: entryName, Normal: normalValue, Critical: criticalValue };
    });

    // Ref and state to track container width
    const containerRef = useRef(null);
    const [chartWidth, setChartWidth] = useState(900);  // Default minimum width

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setChartWidth(width < 900 ? 900 : width); // Minimum 900px for bars & labels
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className="chart-wrapper" ref={containerRef}>
            <h2>Heart Disease Risk Parameters</h2>
            <div className="scroll-container">
                <BarChart width={chartWidth} height={450} data={barData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Legend payload={[
                        { value: 'Normal Range', type: 'rect', color: 'green', id: 'green' },
                        { value: 'Critical Level', type: 'rect', color: 'red', id: 'red' },
                    ]} />
                    <Bar dataKey="Normal" stackId="a" fill="green" />
                    <Bar dataKey="Critical" stackId="a" fill="red" />
                </BarChart>
            </div>
        </div>
    );
};

export default Visualization;