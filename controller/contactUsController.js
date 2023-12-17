const Message = require('../models/messegeModel');

exports.createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, country, message } = req.body;

    // You can access the user ID from the verified token
    const userId = req.user;

    // Create a new message
    const newMessage = new Message({
      firstName,
      lastName,
      email,
      country,
      message,
    });

    // Save the message to the database
    const savedMessage = await newMessage.save();

    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
