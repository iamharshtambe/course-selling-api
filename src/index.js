import express from 'express';
import { connectToDatabase } from './config/db.js';

const app = express();
const port = 3000;

connectToDatabase()
   .then(() => {
      app.listen(port, () => {
         console.log(`🚀 Server is running on http://localhost:${port}`);
      });
   })
   .catch((err) => {
      console.error('❌ Failed to start server:', err);
   });
