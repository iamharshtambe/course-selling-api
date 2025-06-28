import express from 'express';
import { connectToDatabase } from './config/db.js';
import { userRouter } from './routes/userRouter.js';
import { coursesRouter } from './routes/coursesRouter.js';
import { adminRouter } from './routes/adminRouter.js';

const app = express();
const port = 3000;

app.use('/api/v1/user', userRouter);

app.use('/api/v1/courses', coursesRouter);

app.use('/api/v1/admin', adminRouter);

connectToDatabase()
   .then(() => {
      app.listen(port, () => {
         console.log(`🚀 Server is running on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.error('❌ Failed to start server:', err);
   });
