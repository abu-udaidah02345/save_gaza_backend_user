
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const menuListController=require("../controller/menuListController");
// Get all menu items
router.get('/menuItems', menuListController.getAllMenuItems);


module.exports = router;