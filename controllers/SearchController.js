require("express-session")
require('dotenv').config()
const User=require("../server/model/User.js")

class SearchController {
    post(req, res) {
        let key = req.params.key
        const user=User.find({name:{$regex: `.*${key}.*`} }).lean()
        .then(data => {
            res.end(JSON.stringify(data))
        }).catch(err => {
            console.log(err)
        })
        
    }
}

module.exports = new SearchController
