import express from 'express';

export const coursesRouter = express.Router();

coursesRouter.get('/', (req, res) => {});

coursesRouter.get('/purchased', (req, res) => {});

coursesRouter.post('/:courseId/purchase', (req, res) => {});
