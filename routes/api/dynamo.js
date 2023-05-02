const express = require("express");
const router = express.Router();
const dynCtrl = require("../../aws/awsCont");
// const prodCtrl = require("../../models/products");

// router.get("/list", dynCtrl.listMain);
router.use("/list", dynCtrl.productItem);

module.exports = router;
