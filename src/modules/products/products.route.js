const express = require("express");
const { getAllProducts } = require("./products.controller");

const router = express.Router();

router.get("/", getAllProducts);


module.exports = router;
