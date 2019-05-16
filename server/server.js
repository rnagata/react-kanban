const express = require('express');
const app = express();

const port = 8080//process.env.EXPRESS_CONTAINER_PORT;

console.log(port);

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(port);