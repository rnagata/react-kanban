'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Card = require('./database/models/Card');
const cards = require('./routes/cards');

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  return new Card()
  .fetchAll({withRelated: ['priority', 'status', 'createdBy', 'assignedTo']})
  .then((data) => {
    return res.json(data);
  });
});

app.use('/cards', cards);
app.listen(port);