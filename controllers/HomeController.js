require("express-session")
require('dotenv').config()
const User = require("../models/User")

class HomeController {
    get(req, res) {
        const user = User.findOne({ email: req.session.email }).then(data => {
            User.find({}).lean()
                .then(data1 => {
                    res.render('index', {
                        data,
                        data1: data1,
                    })
                })
        }).catch(err => {
            console.log(err)
        })

    }
}

module.exports = new HomeController
