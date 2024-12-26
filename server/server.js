import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Step 10: Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB using Mongoose and the URI from .env
const connectDB = async () => {
  try {
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

// Call the connectDB function to connect to MongoDB
connectDB();

// Define a test route for the root URL
app.get('/', (req, res) => {
  res.send('Hello from the backend with MongoDB connection!');
});

// Import and use your routes (e.g., user routes)
import userRoutes from './routes/userRoutes.js';
app.use('/api/users', userRoutes);

// Port setup and server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});