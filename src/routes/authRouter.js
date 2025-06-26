import express from 'express';

export const authRouter = express.Router();

authRouter.post('/users/signup', (req, res) => {});

authRouter.post('/users/signin', (req, res) => {});
