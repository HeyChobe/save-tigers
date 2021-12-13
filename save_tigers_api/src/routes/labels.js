var express = require('express');
var router = express.Router();
var {getLabels} = require("../controllers/label.controller");

router.get("/",getLabels);

module.exports = router;