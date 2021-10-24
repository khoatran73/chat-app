require("express-session")
require('dotenv').config()

class RegisterController {
    get(req, res) {
        res.render('register', {
            title: "Register", 
            // // email: ""
        })
    }
}

module.exports = new RegisterController
