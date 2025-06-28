import express from 'express';

export const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {});

userRouter.post('/signin', (req, res) => {});

userRouter.post('/courses/purchased', (req, res) => {});
