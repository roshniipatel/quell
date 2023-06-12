const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017'
  process.env.MONGODB_URI || 'mongodb+srv://Roshni:P1234@cluster0.tjb9p6l.mongodb.net/'
);

module.exports = mongoose.connection;
