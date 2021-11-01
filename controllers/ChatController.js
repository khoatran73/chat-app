require("express-session")
require('dotenv').config()
const User = require("../models/User")
class ChatController {

    get(req, res) {
        let id = req.query.id
        User.findOne({ _id: id })
            .then(user => {
                res.render('chat', {
                    title: "Chat",
                    user: user
                })
            }).catch(() => {
                res.render("error", { title: "404 - Page Not Found" })
            })
    }
}

module.exports = new ChatController
