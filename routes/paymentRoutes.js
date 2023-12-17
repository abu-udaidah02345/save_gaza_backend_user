
// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const PaymentController=require("../controller/paymentController");

router.post('/process-payment', PaymentController.processPayment);

module.exports = router;
