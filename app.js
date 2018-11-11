const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const morgan = require('morgan');
const Payment = require('./api/router/payment');
const cors = require('cors');

const app = express();
const formData = multer();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET, OPTIONS');
  }
  next();
});

app.use('/', Payment);

module.exports = app;

