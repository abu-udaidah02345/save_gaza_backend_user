// controllers/PaymentController.js

// controllers/PaymentController.js
const Payment = require("../models/Payment");


async function processPayment(req, res) {
  const { amount, nonce } = req.body;

  try {
    const paymentResult = await Payment.processPayment(amount, nonce, process.env.SQUARE_LOCATION_ID);
    res.json({ payment: paymentResult });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment processing failed' });
  }
}

module.exports = {
  processPayment,
};
