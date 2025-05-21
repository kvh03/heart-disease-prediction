import './home.css';
import React, { useState } from 'react';
import axios from 'axios';
import Visualization from '../Visualization/visualization';
import Description from '../Description/description';

const Home = () => {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [prediction, setPrediction] = useState(null);
    const [showVisualization, setShowVisualization] = useState(false);
    const [description, setDescription] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/getreq/predict-heart-disease', formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error fetching prediction:', error.response?.data || error.message);
            alert("Error: " + (error.response?.data?.error || error.message));
        }
        setShowVisualization(true);
        setDescription(true);
    };


    return (
        <div className='home'>
            <h1>Heart Disease Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Age</span>
                        <input type="number" name="age" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right"></span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Sex</span>
                        <input type="number" name="sex" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">1 = male; 0 = female</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Chest pain type</span>
                        <input type="number" name="cp" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">Type 0/1/2/3</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Resting blood pressure</span>
                        <input type="number" name="trestbps" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">mm Hg</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Serum cholestoral</span>
                        <input type="number" name="chol" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">mg/dL</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Fasting blood sugar 120 mg/dL</span>
                        <input type="number" name="fbs" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">1 = true; 0 = false</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Resting electrocardiographic results</span>
                        <input type="number" name="restecg" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">0/1/2</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Maximum heart rate achieved</span>
                        <input type="number" name="thalach" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">bpm</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Exercise induced angina</span>
                        <input type="number" name="exang" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">0/1</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Oldpeak</span>
                        <input type="number" step="any" name="oldpeak" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">{'>=0'}</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Slope of the peak exercise ST segment</span>
                        <input type="number" name="slope" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">0/1/2</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Number of major vessels (0-3) colored by fluoroscopy</span>
                        <input type="number" name="ca" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">0-3</span>
                    </div>
                    <div style={{ display: 'contents' }}>
                        <span className="input-label-left">Thalassemia</span>
                        <input type="number" name="thal" onChange={handleChange} onWheel={(e) => e.target.blur()} required />
                        <span className="input-label-right">1/2/3</span>
                    </div>
                </div>
                <button type="submit">Predict</button>
            </form>

            {prediction !== null && (
                <div style={{ backgroundColor: prediction === 1 ? 'red' : 'green' }}>
                    <h2>{prediction === 1 ? 'At Risk for Heart Disease' : 'Low Risk of Heart Disease'}</h2>
                </div>
            )}
            {showVisualization && <Visualization formData={formData} />}
            {description && <Description formData={formData} />}
        </div>
    );

};

export default Home; 