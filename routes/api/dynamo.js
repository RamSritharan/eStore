const express = require("express");
const router = express.Router();
const dynCtrl = require("../../aws/awsCont");
// const prodCtrl = require("../../models/products");

// router.get("/list", dynCtrl.listMain);
router.get("/list", dynCtrl.productItem);

// router.get("/list", prodCtrl.run);

module.exports = router;
fdsfssf;
