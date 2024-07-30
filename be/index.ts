console.log('Running...');

import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
require('dotenv').config();

const connectDB = require('./db/db');
const router = require('./routes/router');

const app = express();

app.use(express.json(), router);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

connectDB();

mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});