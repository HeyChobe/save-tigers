var express = require('express');
var router = express.Router();
var {addDonation} = require("../controllers/donation.controller");

router.post("/",addDonation);

module.exports = router;