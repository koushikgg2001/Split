import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
const { getAllUsers, getUserById, registerUser, loginUser } = userController;

// Define routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;
