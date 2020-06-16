const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5070

app.get('/', function(req, res) {
    console.log("hello")
})

app.listen(PORT, function() {
    console.log("SERVER IS STARTED AT :"  + PORT);
})