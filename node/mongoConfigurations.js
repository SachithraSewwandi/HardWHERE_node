/**
 * Created by hsenid on 12/11/15.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/HardWHERE');

var user = {
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
}

var  User=mongoose.model('Company',user)
//create the collection and define the fields


module.exports=User;


