/**
 * Created by hsenid on 12/11/15.
 */

var User=require("./mongoConfigurations.js");

exports.AddCompany=function(data){

    var dd=new User(data);
    dd.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            //console.log('saved successfully:', userObj);
            console.log( userObj._id);

        }
        return userObj._id;

    });
}

exports.AddItem=function(name,data){
    User.findOneAndUpdate({name:name},{$push:data},function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        }
    });
}

exports.View=function(name){
    console.log(name)
    User.findOne({name: name}, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
            return userObj;
        }
    });
}
