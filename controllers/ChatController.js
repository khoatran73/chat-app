require("express-session")
require('dotenv').config()

class ChatController {
    get(req, res) {
        res.render('chat', {
            title: "Chat", 
            // // email: ""
        })
    }
}

module.exports = new ChatController
