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

app.get('/landingPage', (req, res) => {
    res.render('landingPage');
  });

app.post('/submit-form', (req, res) => {
    res.render('landingPage');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});