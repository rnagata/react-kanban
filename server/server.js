const express = require('express');
const app = express();

const port = process.env.EXPRESS_CONTAINER_PORT;

console.log(port);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port);