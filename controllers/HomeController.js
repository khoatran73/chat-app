require("express-session")
require('dotenv').config()

class HomeController {
    get(req, res) {
        res.render('index', {
            // title: "Login", 
            // // email: ""
        })
    }
}

module.exports = new HomeController
