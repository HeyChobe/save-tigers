var express = require('express');
var router = express.Router();
var {addMessage} = require("../controllers/message.controller");

router.post("/",addMessage);

module.exports = router;