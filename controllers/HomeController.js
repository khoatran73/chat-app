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
                            console.log(host)
                            res.render('index', {
                                search_user: req.query.search_user,
                                host: host[0],
                                users: users, //search users
                            })
                        })
                }).catch(err => {
                    console.log(err)
                })
        } else {
            console.log(req.session.email)
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
                    console.log(err)
                })
        }
    }
}

module.exports = new HomeController
