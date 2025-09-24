
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const cnct = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${cnct.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;