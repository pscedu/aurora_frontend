const express = require('express');
const bodyPaser = require('body-parser');
const request = require('request');
const app = express();

const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('index');
});

app.listen(port, function (){
    console.log('Server started. Listening on '+port);
});
