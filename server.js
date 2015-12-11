var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path =require('path');
var app = express();
app.use(express.static(__dirname + '/angular'));
app.set('port', 3006);
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing       application/x-www-form-urlencoded
var router = express.Router();


//mongo
var cmp=require("./node/mongofunctions.js");

//add company details
app.post('/AddCompany', function(req, res) {
    var newQuote1 =
        {
            name:(req.body.name) ,
            adress1:(req.body.adress1),
            adress2:(req.body.adress2),
            adress3:(req.body.adress3),
            email:(req.body.email),
            userName:(req.body.UserName),
            password:(req.body.password),
            confpassword:(req.body.confpassword)
        };
    cmp.AddCompany(newQuote1);
    res.send("suc");
});

//add items to companies
app.post('/AddItem', function(req, res) {
    var update ={
        item :{
            type:(req.body.type),
            quantity:(req.body.quantity),
            price:(req.body.price),
        }
    };
    cmp.AddItem(req.body.name,update);
    res.send("suc");
});

//view company profile
router.get('/viewdata/:name', function(req, res) {
    console.log(req.params.name)
    //console.log(name)
    //res.send(cmp.View(req.params.name));
   /* User.findOne({name:req.params.name}, function (err, userObj) {
        //console.log("connected")
        //console.log(userObj)
        if (err) {
            console.log(err);
        } else if (userObj) {
            //console.log('Found:', userObj);
            res.send(userObj);
        }
    });*/

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

    User.findOneAndUpdate({name:req.body.name},{$pull:query},function (err, userObj) {
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