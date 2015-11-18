var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var app = express();


app.use(express.static(__dirname + '/angular'));
app.set('port', 3006);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded
//app.use(app.router);

/*app.all('/!*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});*/

mongoose.connect('mongodb://localhost/HardWHERE');//connect to customer dattabse in mongodb

//create the collection and define the fields
var User = mongoose.model('Company', {

    name:String,
    adress1:String,
    adress2:String,
    adress3:String,
    email:String,
    userName:String,
    password:String,
    confpassword:String,
    item:{
        type:{type:String},
        quantity:String,
        price:String,
    },

});

//add company details
app.post('/AddCompany', function(req, res) {
    var newQuote1 =new User (
        {
            name:(req.body.name) ,
            adress1:(req.body.add1),
            adress2:(req.body.add2),
            adress3:(req.body.add3),
            email:(req.body.email),
            userName:(req.body.UserName),
            password:(req.body.password),
            confpassword:(req.body.confpassword)
        });

    //add data to database
    newQuote1.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', userObj);
        }
    });
    res.json("response added");
});

//add items to companies
app.post('/AddItem', function(req, res) {
    console.log(req.body);
    console.log(req.body.name);

    var update ={
        item :{
            type:(req.body.type),
            quantity:(req.body.quantity),
            price:(req.body.price),
        }
    };
    console.log(update);

    User.findOneAndUpdate({name:req.body.name},{$push:update},function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        }
    });
});

//view company profile
app.get('/viewdata', function(req, res) {
    User.findOne({name:"\"sew\""}, function (err, userObj) {
        //console.log("connected")
        //console.log(userObj)
        if (err) {
            //console.log(err);
        } else if (userObj) {
            //console.log('Found:', userObj);
            res.send(userObj);
        }
    });

});

//delete iitem
app.delete("/viewdata",function(req){
    console.log('delette'+req.body)
    var query ={
        item :{
            type:(req.body.type),
            quantity:(req.body.quantity),
            price:(req.body.price),
        }
    };


    User.findOneAndUpdate({name:"\"sew\""},{$pull:query},function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        }
    });

})

//create the server
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});