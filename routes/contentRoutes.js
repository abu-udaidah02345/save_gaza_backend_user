// GET request to get all content

// routes/adContentRoutes.js
const express = require('express');
const router = express.Router();
const adContentController=require("../controller/adContentController");

router.get('/get-content', adContentController.getAllContent);


module.exports = router;
