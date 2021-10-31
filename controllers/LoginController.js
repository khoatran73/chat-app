require("express-session")
require('dotenv').config()
const User = require("../models/User")

class LoginController {
    get(req, res) {
        res.render('login', {
            title: "Login",
            // email: ""
        })
    }

    post(req, res) {
        let { email, password } = req.body
        const user = User.findOne({ email: email, password: password })
        User.findOne({ email: email, password: password })
            .then(data => {
                if (data) {
                    req.session.email = email
                    User.find({}).lean()
                        .then(data1 => {
                            res.render('index', {
                                data,
                                data1: data1,
                            })
                        })

                }
            }).catch(err => {
                res.render('login', { error: "Invalid email or password", title: "Login", email: email })
            })

    }
}

module.exports = new LoginController
