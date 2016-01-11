/**
 * Created by hsenid on 1/11/16.
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var User=require("./mongoConfigurations.js");
var ObjectID = mongoose.ObjectId;

//add company details
router.post('/Addusers', function(req, res) {
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

    var dd=new User(newQuote1);
    dd.save(function (err, userObj) {
        if (err) {
            res.send(err);
        } else {
            console.log( userObj._id);
            res.send(userObj._id);
        }
    });
});

//router.param('id',function(req,res){});

//add items to companies
router.post('/AddItem/:id', function(req, res) {
    var update ={
        item :{
            type:(req.body.type),
            quantity:(req.body.quantity),
            price:(req.body.price),
        }
    };
    /*cmp.AddItem(req.body.name,update);
    res.send("suc");*/
    console.log(req.params.id)

    User.findOneAndUpdate({_id:req.params.id},{$push:update},function (err, userObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else if (userObj) {
            console.log('Found:', userObj);
            res.send("success");
        }
    });
});
//view company profile
router.get('/viewusers/:id', function(req, res) {
    console.log(req.params.id)
    //console.log(name)
    //res.send(cmp.View(req.params.name));
     User.findOne({_id:req.params.id}, function (err, userObj) {
     console.log("connected")
     if (err) {
        console.log(err);
     } else if (userObj) {
        console.log('Found:', userObj);
        res.send(userObj);
     }
     });

});



//delete iitem
router.delete("/viewdata",function(req){
    console.log('delette'+req.body)
    var query ={
        item :{
            type:(req.body.type),
            quantity:(req.body.quantity),
            price:(req.body.price),
        }
    };

    User.findOneAndUpdate({_id:req.params.id},{$pull:query},function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        }
    });

})

module.exports = router;