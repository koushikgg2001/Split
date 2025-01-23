import express from 'express';
import bodyParser from "body-parser";
import userRoutes from './routes/userRoutes.js';

const app = express();
// const app = express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the backend with MongoDB connection!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});