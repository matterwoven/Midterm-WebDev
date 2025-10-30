const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
    res.render('home');
});

const appointmentsArray = []

app.post('/submit-form', (req, res) => {


    // Create a JSON object to store the order data

    const appointment = {

        fname: req.body.fname,

        lname: req.body.lname,

        date: req.body.date,

        time: req.body.time,

        timestamp: new Date()

      };

    appointmentsArray.push(appointment);
    // res.sendFile(`${import.meta.dirname}/views/response.html`)
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});