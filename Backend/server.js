const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const methodOverride = require('method-override');

// Import the controller
const FunkoPopRouter = require('./controllers/funkoPopContainer.js');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(methodOverride('_method'));

// Add the Router to the correct route
app.use('/', FunkoPopRouter);


app.listen(3000, () => {
  console.log('The express app is up and running')
});