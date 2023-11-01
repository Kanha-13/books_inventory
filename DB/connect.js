const { default: mongoose } = require("mongoose")

const connect = async (URI) => {
  try {
    await mongoose.connect(URI)
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


module.exports = connect