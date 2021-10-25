const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Users= new Schema({
    name:String,
    password:String,
    email:String,
    image:String,
    slug:{type:String,slug:'email',unique:true},
})
module.exports = mongoose.model('User',Users);