import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import userController from '../controllers/userController.js';

const router = express.Router();
const {registerUser, loginUser } = userController;

router.use(cors({
  origin: 'http://localhost:3000'
}));
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json()); 

// Define routes
router.post('/register',registerUser);
router.post('/login',loginUser);

export default router;
