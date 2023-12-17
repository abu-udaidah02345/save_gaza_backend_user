

const mongoose = require('mongoose');


const menuListSchema = new mongoose.Schema({
    name: String,
    title: String,
    image: String,
    description: String,
  });
  
  module.exports = mongoose.model('MenuList', menuListSchema);