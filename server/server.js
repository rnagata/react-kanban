'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local');
const cards = require('./routes/cards');
const login = require('./routes/login');

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/cards', cards);
app.use('/login', login);
app.listen(port, () => {
  console.log('Server listening on port ', port);
});