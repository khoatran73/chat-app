function rejectLogin(req, res, next) {
    if (req.session.email) {
        res.redirect("back")
    } else {
        next()
    }
}

module.exports = rejectLogin