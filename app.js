var express = require('express')

var app = express();
app.set('View engine', 'ejs');

app.get('/', (req, res) => {
 res.sendFile(__dirname+'/index.html')
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname+'/contact.html')
});

app.get('/users/:name', (req, res) => {
    var data  ={
        age:23,
        job: 'ninja'
    }
   res.render(__dirname+'/views/profile.ejs',{person: req.params.name, data: data})
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

