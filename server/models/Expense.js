import connectDB from "../config/db.js";

connectDB();

import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  friendName: { 
                type: String,
                required: true 
              },
  email: { 
          type: String, 
          required: true 
         },
  amount: { 
           type: Number, 
           required: true 
          },
  createdAt: { 
              type: Date, 
              default: Date.now 
            },
});

const Expense = mongoose.model('Expense', expenseSchema);
export default Expense;