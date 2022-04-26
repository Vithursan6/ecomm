const express = require("express");
const router = express.Router();
const { userById, scan, update } = require("../controllers/user");
const { requireLogin, isAuth, isAdmin } = require("../controllers/auth");


//admin route
router.get("/secret/:userId", requireLogin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

router.get("/user/:userId", requireLogin, isAuth, scan);
router.put("/user/:userId", requireLogin, isAuth, update);

router.param('userId', userById)


module.exports = router;