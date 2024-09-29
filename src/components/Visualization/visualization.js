import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import './visualization.css';

const Visualization = ({ formData }) => {
    const thresholds = {
        cp: 2,           // Chest Pain type
        trestbps: 140,   // Resting Blood Pressure
        chol: 200,       // Cholesterol
        fbs: 120,        // Fasting Blood Sugar
        restecg: 1,      // Resting Electrocardiographic results
        thalach: 120,    // Maximum Heart Rate
        exang: 1,      // Exercise induced angina
        oldpeak: 1,     // Oldpeak
        slope: 1,       // Slope of the peak exercise ST segment
        ca: 2,          // Number of major vessels
        thal: 1         // Thalassemia
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
            // General logic for other parameters
            normalValue = Math.min(value, threshold); 
            criticalValue = value > threshold ? value - threshold : 0;
        }

        return { name: entryName, Normal: normalValue, Critical: criticalValue };
    });

    return (
        <div style={{ width: '100%', padding: 0, overflowX: 'hidden', overflowY: 'hidden' }}>
            <h2>Heart Disease Risk Parameters</h2>
            <BarChart width={window.innerWidth} height={450} data={barData}>
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
    );
};

export default Visualization;