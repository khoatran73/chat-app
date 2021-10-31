require("express-session")
require('dotenv').config()
const User = require("../models/User")

class HomeController {
    get(req, res) {
        User.findOne({ email: req.session.email })
            .then(host => {
                User.find({}).lean()
                    .then(users => {
                        res.render('index', {
                            host: host,
                            users: users,
                        })
                    })
            }).catch(err => {
                console.log(err)
            })

    }
}

module.exports = new HomeController
