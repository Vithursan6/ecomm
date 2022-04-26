const express = require("express");
const router = express.Router();
const { post, scan, categoryById, update, remove } = require("../controllers/category");
const { requireLogin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/category/:categoryId", scan)
router.post("/category/create/:userId", requireLogin, isAuth, isAdmin, post);
router.put("/category/categoryId/:userId", requireLogin, isAuth, isAdmin, update);
router.delete("/category/categoryId/:userId", requireLogin, isAuth, isAdmin, remove);

router.param("userId", userById);
router.param("categoryId", categoryById);


module.exports = router;