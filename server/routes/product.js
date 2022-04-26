const express = require("express");
const router = express.Router();
const { post, productById, scan, remove, update, listSearch, pic } = require("../controllers/product");
const { requireLogin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", scan);
router.post("/product/post/:userId", requireLogin, isAuth, isAdmin, post);
router.post("/products/search", listSearch);
router.delete("/product/:productId/:userId", requireLogin, isAdmin, isAuth, remove);
router.put("/product/:productId/:userId", requireLogin, isAdmin, isAuth, update);
router.get("/product/pic/:productId", pic);

router.param("userId", userById);
router.param("productId", productById);



module.exports = router;