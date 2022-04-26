const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "Invalid ID!"
            });
        }
        req.profile = user;
        next();
    });
};

exports.update = (req, res) => {
    User.findByIdAndUpdate(
        { _id: req.profile._id },
        { $set: req.body },
        { new: true },
        (err, user) => {
            if (err) {
                return res.status(400).json({
                    error: "Unauthorized action: Permission required"
                });
            }
            user.hased_password = undefined;
            user.salt = undefined;
            res.json(user);
        }
    );
};

exports.scan = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
};

