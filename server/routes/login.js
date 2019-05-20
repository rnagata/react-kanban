'use strict';

const express = require('express');
const router = express.Router();

router.route('/')
  .post((req, res) => {
    console.log('/login post');
    console.log(req.body);
    return res.send();
  })

module.exports = router;