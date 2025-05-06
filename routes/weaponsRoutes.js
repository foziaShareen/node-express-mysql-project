const { getWeapons } = require("../controllers/weaponsControllers.js");
const { getShotgunById } = require("../controllers/weaponsControllers.js");
const { createShotgunData } = require("../controllers/weaponsControllers.js");
const { updateShotgunData } = require("../controllers/weaponsControllers.js");
const { deleteShotgunData } = require("../controllers/weaponsControllers.js");
const express = require('express');
// routes object 
const router = express.Router();

//get all weapons
router.get('/all',getWeapons);
//get by id
router.get('/id/:id',getShotgunById);
//create shotgun data
router.post('/create',createShotgunData);
//update shotgun data
router.put('/update/:id',updateShotgunData);
//delete shotgun data
router.delete('/delete/:id',deleteShotgunData);
module.exports = router;