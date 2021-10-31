function checkLogin(req, res, next) {
    if (!req.session.email) {
        res.render("login", { title: "Login" })
    }
    else {
        next()
    }
}

module.exports = checkLogin