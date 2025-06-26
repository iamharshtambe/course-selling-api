import express from 'express';
import { connectToDatabase } from './config/db.js';
import { authRouter } from './routes/authRouter.js';
import { coursesRouter } from './routes/coursesRouter.js';

const app = express();
const port = 3000;

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/courses', coursesRouter);

connectToDatabase()
   .then(() => {
      app.listen(port, () => {
         console.log(`🚀 Server is running on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.error('❌ Failed to start server:', err);
   });
