console.log('Running...');

const express = require('express');
const mongoose = require('mongoose');


const connectDB = require('./db/db');

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  //res.send("Express + TypeScript Server");
});



connectDB();

mongoose.connection.once('open', () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});