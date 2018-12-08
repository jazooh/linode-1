const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const _ = require('lodash');
const {User} = require('./models/user/user.js')




var app = express()
app.use(bodyParser.json());
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



mongoose.connect("mongodb://localhost:27017/cv-maker", {
  useNewUrlParser: true
});



app.get('/test', (req,res)=>{
    res.json('Cv- maker vol 1')
})

app.post('/users',(req,res)=>{
    var body =_.pick(req.body,['email','password','telephone','username','firstName','middleName','lastName','address'])
    const user = new User(body);
    user.save()
    res.json('user saved successfully')
})








app.listen(port, () => console.log(`Server is running on port ${port}!`))

module.exports = {
  app
}