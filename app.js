var express = require('express')

var app = express();

app.get('/', (req, res) => {
    res.send('This is a main page.')
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});