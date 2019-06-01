'use strict';

const express = require('express');
const router = express.Router();

router.route('/')
  .post((req, res) => {
    console.log('/login post');
    console.log(req.body);
    let temp = {body : req.body}; // an empty body causes an unexpected end of response.
    return res.send(JSON.stringify(temp));
  })

module.exports = router;