const express = require('express');
const router = express.Router();
const videoController=require("../controller/videoController");

router.get('/video/all', videoController.getAllVideos);

module.exports = router;
