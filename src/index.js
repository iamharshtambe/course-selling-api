import express from 'express';
import { connectToDatabase } from './config/db.js';
import { authRouter } from './routes/authRouter.js';
import { courseRouter } from './routes/courseRouter.js';

const app = express();
const port = 3000;

app.use('/', authRouter);

app.use('/', courseRouter);

connectToDatabase()
   .then(() => {
      app.listen(port, () => {
         console.log(`🚀 Server is running on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.error('❌ Failed to start server:', err);
   });
