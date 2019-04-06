module.exports = {
    validateItems(req, res, next) {
    
        if(req.method === "POST") {
    
            req.checkParams("listId", "must be valid").notEmpty().isInt();
            req.checkBody("title", "must be at least 2 characters in length").isLength({min: 2});
            req.checkBody("note", "must be max 20 characters in length").isLength({max: 20});
        }
    
        const errors = req.validationErrors();
    
        if (errors) {
            req.flash("error", errors);
            return res.redirect(303, req.headers.referer)
        } else {
            return next();
        }
    }
}