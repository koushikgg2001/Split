import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

// Connect to MongoDB using Mongoose and the URI from .env
const connectDB = async () => {
  try {
    console.log("from db.js");
    console.log(process.env.PORT);
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit with failure code
  }
};

export default connectDB ;
