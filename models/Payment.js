// models/Payment.js
const { Client } = require('square');

const squareClient = new Client({
  environment: process.env.SQUARE_ENVIRONMENT || 'sandbox',
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

async function processPayment(amount, nonce, locationId) {
  const requestParams = {
    amount,
    source_id: nonce,
    location_id: locationId,
    currency: 'USD', // Change this to the desired currency
  };

  try {
    const response = await squareClient.payments.createPayment(requestParams);
    return response.result.payment;
  } catch (error) {
    console.error(error);
    throw new Error('Payment processing failed');
  }
}

module.exports = {
  processPayment,
};
