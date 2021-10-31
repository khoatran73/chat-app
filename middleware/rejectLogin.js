function rejectLogin(req, res, next) {
    if (req.session.email) {
        // res.redirect("back")
        res.render("index")
    } else {
        next()
    }
}

module.exports = rejectLogin