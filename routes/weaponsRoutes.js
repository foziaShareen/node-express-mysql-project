const { getWeapons } = require("../controllers/weaponsControllers.js");
const express = require('express');
// routes object 
const router = express.Router();

//get all weapons
router.get('/all',getWeapons);
module.exports = router;