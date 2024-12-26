import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
const { getAllUsers, getUserById } = userController;

// Define routes
router.get('/', getAllUsers);
router.get('/:id', getUserById);

export default router;