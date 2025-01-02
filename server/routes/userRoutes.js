import express from 'express';
import cors from 'cors';
import userController from '../controllers/userController.js';

const router = express.Router();
const { getAllUsers, getUserById, registerUser, loginUser } = userController;

router.use(cors({
    origin: "http://localhost:3000",
  }));

// Define routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;
