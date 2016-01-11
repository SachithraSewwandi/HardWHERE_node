var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path =require('path');

var app = express();
app.set('port', 3006);
app.use(express.static(__dirname + '/angular'));
//app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded
//var router = express.Router();

var users=require("./node/users")
app.use('/users', users);

app.use('/users/Addusers',express.static(__dirname + '/angular/'));
app.use('/users/AddItem/:id',express.static(__dirname + '/angular/'));
app.use('/users/viewusers/:id',express.static(__dirname + '/angular/'));

//create the server
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});