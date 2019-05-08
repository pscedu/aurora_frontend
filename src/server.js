const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
var myldap = require('./basicAuth.js');

const port = 8000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function (req, res){
    res.render('login', {error:""});
});

app.get('/login', function (req, res){
    res.render('login', {error:""});
});

app.post('/auth', function(req, res){
    myldap.init();
    var usr = req.body.username;
    var pass = req.body.password;
    myldap.auth(usr, pass, function(passed){
        if(passed){
            console.log("LDAP Auth worked");
            res.render('portal', {user: usr});
        }else{
            console.log("Failed to auth");
            res.render('login', {error: "failed to authenticate"});
        }
    });
    
});

app.listen(port, function (){
    console.log('Server started. Listening on '+port);
});

