var express = require("express");
var router = express.Router();

let index = require("../controllers/index");

/* GET home page. */
router.get("/:name", index.index);
router.get("/", index.index1);

module.exports = router;
