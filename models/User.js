const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const User = new Schema({
    name: String,
    email: String,
    password: String,
    image: String,
    slug: { type: String, slug: 'email', unique: true },
})
module.exports = mongoose.model('User', User);