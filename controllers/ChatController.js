require("express-session")
require('dotenv').config()
const User = require("../models/User")
class ChatController {

    get(req, res) {
        let id = req.query.id
        User.findOne({ _id: id })
            .then(user => {
                console.log(user)
                res.render('chat', {
                    title: "Chat",
                    user: user
                })
            }).catch(err => {
                console.log(err)
            })
    }
}

module.exports = new ChatController
