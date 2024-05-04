const express = require("express");
const { getAllSalse } = require("./salse.controller");

const router = express.Router();

router.get("/", getAllSalse);


module.exports = router;
