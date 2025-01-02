import express from 'express';
import bodyParser from "body-parser";

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Step 10: Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


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