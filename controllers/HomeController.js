require("express-session")
require('dotenv').config()
const User = require("../models/User")

class HomeController {
    get(req, res) {
        if (req.query.search_user) {
            User.find({ email: req.session.email })
                .then(host => {
                    User.find({ name: { $regex: req.query.search_user, $options: "i" } }).lean() // i: Case insensitivity to match upper and lower cases
                        .then(users => {
                            res.render('index', {
                                search_user: req.query.search_user,
                                host: host[0],
                                users: users, //search users
                            })
                        })
                }).catch(err => {
                    res.send("error")
                })
        } else {
            User.find({ email: req.session.email })
                .then(host => {
                    User.find({}).lean()
                        .then(users => {
                            res.render('index', {
                                host: host[0],
                                users: users,
                            })
                        })
                }).catch(err => {
                    res.send("error")
                })
        }
    }
}

module.exports = new HomeController
