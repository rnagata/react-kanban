'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const Card = require('./database/models/Card');

const port = process.env.EXPRESS_CONTAINER_PORT;

const app = express();
app.use(bodyParser.json());

app.get('/', function(req, res){
  return new Card()
  .fetchAll({withRelated: ['priority', 'status', 'createdBy', 'assignedTo']})
  .then((data) => {
    console.log(data);
    res.send('blah');
  });

});

app.listen(port);