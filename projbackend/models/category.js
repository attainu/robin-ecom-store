const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : {
        type : String,
        required : true,
        maxlength: 32,
        trim : true,
        unique : true,
    }
},
{ timestamp : true}
);

module.exports = mongoose.model("Category",categorySchema);