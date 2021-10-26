require("express-session")
require('dotenv').config()
const User=require("../server/model/User.js")
class ChatController {

    get(req, res) {
        const user=User.findOne({email:req.session.email}).then(data => {
            res.render('chat', {
                title: "Chat", data1:data
                // // email: ""
            })
        }).catch(err => {
            console.log(err)
        })
        
    }
}

module.exports = new ChatController
