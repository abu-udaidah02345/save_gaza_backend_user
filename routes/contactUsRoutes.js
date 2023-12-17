
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const messageController=require("../controller/contactUsController");
const authMiddleware = require('../middleware/authMiddleware');



router.post('/messages', authMiddleware.verifyToken,messageController.createMessage);

module.exports = router;