exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'Email must be between 5 and 40 characters!')
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @ symbol")
        .isLength({
            min: 5,
            max: 40
        });
    req.check("password", "Password is required").notEmpty();
    req.check("password")
        .isLength({ min: 5 })
        .withMessage("Password must contain at least 5 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};