const express = require("express");
const router = express.Router();
const dynCtrl = require("../../models/awsCont");
// const prodCtrl = require("../../models/products");

// router.get("/list", dynCtrl.listMain);
router.get("/list", dynCtrl.productItem);
router.post("/orderAdd", dynCtrl.productPost);

module.exports = router;
