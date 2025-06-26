import express from 'express';

export const adminRouter = express.Router();

adminRouter.post('/signup', (req, res) => {});

adminRouter.post('/signin', (req, res) => {});

adminRouter.post('/course/create', (req, res) => {});

adminRouter.put('/course/update', (req, res) => {});

adminRouter.get('/courses', (req, res) => {});
