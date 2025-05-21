import os
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained machine learning model
model = joblib.load('heart_disease_model.joblib')

# Function to make predictions using the loaded model
def predict_heart_disease(input_data):

    input_data_as_numpy_array = np.asarray(input_data)    
    input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)    
    prediction = model.predict(input_data_reshaped)
    
    return prediction[0]

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print('Received data:', data)
        
        # Ensure all required features are present in the request
        expected_fields = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
        for field in expected_fields:
            if field not in data:
                return jsonify({'error': f'Missing field: {field}'}), 400
        
        # Extract features from the JSON request
        input_data = [
            int(data['age']),
            int(data['sex']),
            int(data['cp']),
            int(data['trestbps']),
            int(data['chol']),
            int(data['fbs']),
            int(data['restecg']),
            int(data['thalach']),
            int(data['exang']),
            float(data['oldpeak']),
            int(data['slope']),
            int(data['ca']),
            int(data['thal'])
        ]
        
        prediction = predict_heart_disease(input_data)
        
        result = 1 if prediction == 1 else 0
        return jsonify({'prediction': result})
    
    except Exception as e:
        print('Error during prediction:', str(e))
        return jsonify({'error': str(e)}), 500

# Root route to confirm the server is running
@app.route('/', methods=['GET'])
def index():
    return "Heart Disease Prediction API is running."

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)