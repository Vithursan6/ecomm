const express = require("express");
const router = express.Router();
const { post, scan, categoryById, update, remove, list } = require("../controllers/category");
const { requireLogin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/categories", list);
router.get("/category/:categoryId", scan)
router.post("/category/post/:userId", requireLogin, isAuth, isAdmin, post);
router.put("/category/:categoryId/:userId", requireLogin, isAuth, isAdmin, update);
router.delete("/category/:categoryId/:userId", requireLogin, isAuth, isAdmin, remove);

router.param("userId", userById);
router.param("categoryId", categoryById);


module.exports = router;