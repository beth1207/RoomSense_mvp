const express = require('express');

const db = require('./utils/db');

const app = express();

// Connect Database
db();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
    return res.status(200).json({home: 'home'})
})

app.get('/home', (req, res) => {
    return res.status(200).json({message: 'hello'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
