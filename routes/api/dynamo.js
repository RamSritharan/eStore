const express = require("express");
const router = express.Router();
const dynCtrl = require("../../aws/listTable");

router.get("/list", dynCtrl.listMain);

module.exports = router;
