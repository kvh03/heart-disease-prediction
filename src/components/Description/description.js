import React from 'react'
import './description.css'

const Description = () => {
    return (
        <div className='description'>
            <div className="top">
                <div className="card">
                    <h3>Chest Pain Type (CP)</h3>
                    <ul>
                        <li>Type 0: Typical angina</li>
                        <li>Type 1: Atypical Angina</li>
                        <li>Type 2: Non-Anginal Pain</li>
                        <li>Type 3: Asymptomatic</li>
                        <li>Typical Angina (Type 0) and Asymptomatic (Type 3) are the most strongly associated with heart disease</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Resting Blood Pressure (Trestbps)</h3>
                    <ul>
                        <li>Normal: &lt; 120/80 mmHg</li>
                        <li>Elevated: 120-129/&lt;80 mmHg</li>
                        <li>Hypertension Stage 1: 130-139/80-89 mmHg</li>
                        <li>Hypertension Stage 2: ≥ 140/90 mmHg (High blood pressure is a significant risk factor)</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Cholesterol (Chol)</h3>
                    <ul>
                        <li>Total cholesterol: &lt; 200 mg/dL is desirable; 200-239 mg/dL is borderline high; ≥ 240 mg/dL is high</li>
                        <li>LDL ("bad" cholesterol): &lt; 100 mg/dL is optimal; 100-129 mg/dL is near optimal; 130-159 mg/dL is borderline high; ≥ 160 mg/dL is high</li>
                        <li>HDL ("good" cholesterol): &lt; 40 mg/dL is low (considered a risk factor); ≥ 60 mg/dL is considered protective</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Fasting Blood Sugar (Fbs)</h3>
                    <ul>
                        <li>Normal: &lt; 100 mg/dL</li>
                        <li>Prediabetes: 100-125 mg/dL</li>
                        <li>Diabetes: ≥ 126 mg/dL (Increased risk of heart disease)</li>
                    </ul>
                </div>
            </div>
            <div className="middle">
                <div className="card">
                    <h3>Resting Electrocardiographic Results (Restecg)</h3>
                    <ul>
                        <li>0: Normal</li>
                        <li>1: Having ST-T wave abnormality (likely indicates an issue with the heart)</li>
                        <li>2: Showing probable or definite left ventricular hypertrophy (more severe)</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Maximum Heart Rate Achieved (Thalach)</h3>
                    <ul>
                        <li>Lower maximum heart rates (e.g., &lt; 120 bpm) can indicate decreased physical fitness, which is a risk factor</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Exercise Induced Angina (Exang)</h3>
                    <ul>
                        <li>0: No angina (better)</li>
                        <li>1: Angina present (greater risk)</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Oldpeak (ST Depression Induced by Exercise Relative to Rest)</h3>
                    <ul>
                        <li>0: No ST depression</li>
                        <li>Values &gt; 1 mm are generally considered concerning</li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="card">
                    <h3>Slope of Peak Exercise ST Segment (Slope)</h3>
                    <ul>
                        <li>0: Upsloping</li>
                        <li>1: Flat</li>
                        <li>2: Downsloping</li>
                        <li>Flat and downsloping ST segments are more indicative of heart disease</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Number of Major Vessels Colored by Fluoroscopy (Ca)</h3>
                    <ul>
                        <li>0-1: Better</li>
                        <li>2-3: Increasingly worse</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Thalassemia (Thal)</h3>
                    <ul>
                        <li>1: Normal</li>
                        <li>2: Fixed defect (no blood flow in some part of the heart)</li>
                        <li>3: Reversible defect (blood flow is normal but may decrease during exercise)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Description