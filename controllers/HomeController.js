require("express-session")
require('dotenv').config()
const User=require("../server/model/User.js")

class HomeController {
    get(req, res) {
        const user=User.findOne({email:req.session.email}).then(data => {
            res.render('index', {
               data
            })
        }).catch(err => {
            console.log(err)
        })
        
    }
}

module.exports = new HomeController
