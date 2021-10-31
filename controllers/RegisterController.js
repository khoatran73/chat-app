require("express-session")
require('dotenv').config()
require('express')
const User = require("../models/User")
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const unlink = promisify(fs.unlink)
class RegisterController {
    get(req, res) {
        res.render('register', {
            title: "Register"
        })
    }
    async post(req, res, next) {
        if (req.body.name && req.body.email && req.body.password && req.body.password2 && req.file) {
            let { name, email, password, password2 } = req.body
            let error = ""
            if (password !== password2) {
                error = "Confirm password incorrect"
            }

            await User.find({ email: email })
                .then(user => {
                    if (user) {
                        error = "Email already exist, please try again"
                    } else {
                        next()
                    }
                })
                .catch(err => {
                    console.log(err)
                })

            if (error) {
                unlink(path.join(__dirname, '../public/images/avatar/' + req.file.filename))
                res.render("register", {
                    title: "Register",
                    error: error
                })
            } else {
                let userJson = {
                    name: name,
                    email: email,
                    password: password,
                    image: req.file.path.split("\\").slice(1).join("/")
                }

                let user = new User(userJson)

                user.save()

                res.render('./login', {
                    title: "Login"
                })
            }
        } else {
            if (req.file) {
                unlink(path.join(__dirname, '../public/images/avatar/' + req.file.filename))
            }
            res.render('./register', {
                error: "Please enter enough information",
                title: "Register"
            })
        }
    }
}

module.exports = new RegisterController
