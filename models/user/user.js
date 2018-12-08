const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type:String},
    firstName:{type:String},
    middleName:{type:String},
    lastName:{type:String},
    email:{type:String},
    telephone:{type:String},
    address:{type:String},
    password:{type:String}

})

var User = mongoose.model('User', UserSchema);



module.exports = {User}