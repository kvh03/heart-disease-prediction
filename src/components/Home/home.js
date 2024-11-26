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
            const response = await axios.post(`https://heartdisease-prediction.vercel.app/`, formData);
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error('Error fetching prediction:', error.response ? error.response.data : error.message);
            alert("There was an error fetching the prediction.");
        }
        setShowVisualization(true);
        setDescription(true);
    };


    return (
        <div className='home'>
            <h1>Heart Disease Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <div style={{display:'contents'}}><span className="input-label-left">Age</span><input type="number" name="age" onChange={handleChange} required /><span className="input-label-right"></span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Sex</span><input type="number" name="sex" onChange={handleChange} required /><span className="input-label-right">1 = male; 0 = female</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Chest pain type</span><input type="number" name="cp" onChange={handleChange} required /><span className="input-label-right">Type 0/1/2/3</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Resting blood pressure</span><input type="number" name="trestbps" onChange={handleChange} required /><span className="input-label-right">mm Hg</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Cholestoral</span><input type="number" name="chol" onChange={handleChange} required /><span className="input-label-right">mg/dL</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Fasting blood sugar 120 mg/dL</span><input type="number" name="fbs" onChange={handleChange} required /><span className="input-label-right">1 = true; 0 = false</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Resting electrocardiographic results</span><input type="number" name="restecg" onChange={handleChange} required /><span className="input-label-right">0/1/2</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Maximum heart rate achieved</span><input type="number" name="thalach" onChange={handleChange} required /><span className="input-label-right">bpm</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Exercise induced angina</span><input type="number" name="exang" onChange={handleChange} required /><span className="input-label-right">0/1</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Oldpeak</span><input type="float" name="oldpeak" onChange={handleChange} required /><span className="input-label-right">{'>=0'}</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Slope of the peak exercise ST segment</span><input type="number" name="slope" onChange={handleChange} required /><span className="input-label-right">0/1/2</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Number of major vessels (0-3) colored by fluoroscopy</span><input type="number" name="ca" onChange={handleChange} required /><span className="input-label-right">0-3</span></div>
                    <div style={{display:'contents'}}><span className="input-label-left">Thalassemia</span><input type="number" name="thal" onChange={handleChange} required /><span className="input-label-right">1/2/3</span></div>
                </div>
                <button type="submit">Predict</button>
            </form>
            {prediction !== null && (
                <div style={{backgroundColor: prediction === 1 ? 'red' : 'green'}}>
                    <h2>{prediction === 1 ? 'Has Heart Disease' : 'No Heart Disease'}</h2>
                </div>
            )}
            {showVisualization && <Visualization formData={formData} />}
            {description && <Description formData={formData} />}
        </div>
    );
};

export default Home;
