const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
cors(app)
app.use(bodyParser.json());

// app.get('/predict-heart-disease', (req, res) => {
//     res.send('This is the heart disease prediction endpoint.');
// });

app.post('/predict', async (req, res) => {
    try {
        console.log('Form Data Received at Node:', req.body);

        const response = await axios.post('https://heart-disease-prediction-nw87.onrender.com/predict-heart-disease', req.body);

        console.log('Response from Flask:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error in Flask API:', error.response?.data || error.message);
        res.status(500).json({
            message: 'Error in Flask API',
            error: error.response?.data || error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Node.js server running on port ${PORT}`);
});
