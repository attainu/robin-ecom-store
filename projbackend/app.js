require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE, 
{
useNewUrlParser: true, 
useUnifiedTopology: true,
useCreateIndex: true
}).then(() => {
    console.log("DB IS CONNECTED")
});

const PORT = 5070

app.get('/', function(req, res) {
    console.log("hello")
})

app.listen(PORT, function() {
    console.log("SERVER IS STARTED AT :"  + PORT);
})