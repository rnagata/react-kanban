const express = require('express');
const app = express();

const port = process.env.EXPRESS_CONTAINER_PORT;

app.get('/', function(req, res){
  console.log('hello world');
});

app.listen(port);