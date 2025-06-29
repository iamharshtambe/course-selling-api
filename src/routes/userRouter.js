import express from 'express';
import { User } from '../models/User.js';

export const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
   try {
      const { firstName, lastName, email, password } = req.body;

      await User.create({
         firstName,
         lastName,
         email,
         password,
      });

      res.json({ message: 'Signup successful' });
   } catch (err) {
      res.status(404).send(`Error: ${err.message}`);
   }
});

userRouter.post('/signin', (req, res) => {});

userRouter.post('/courses/purchased', (req, res) => {});
