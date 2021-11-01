require("express-session")
require('dotenv').config()
const User = require("../models/User")

class LoginController {
    get(req, res) {
        res.render('login', {
            title: "Login"
        })
    }

    post(req, res) {
        let { email, password } = req.body

        User.findOne({ email: email, password: password })
            .then(user => {
                if (user) {
                    req.session.email = user.email
                    res.redirect('./')
                } else {
                    res.render('login', {
                        title: "Login",
                        error: "Invalid email or password",
                        email: req.body.email
                    })
                }
            })
            .catch(err => {
                res.send("err")
            })
    }
}

module.exports = new LoginController
