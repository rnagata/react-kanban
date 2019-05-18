'use strict';

const express = require('express');
const Card = require('../database/models/Card');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    console.log('get route');
    return new Card()
    .fetchAll({withRelated: ['priority', 'status', 'createdBy', 'assignedTo']})
    .then((data) => {
      return res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .post((req, res) => {
    console.log('post route');
    let newTitle;
    let newBody;

    if (req.body.title.length === 0){
      newTitle = 'Default Title';
    } else {
      newTitle = req.body.title;
    }

    if (req.body.body.length === 0){
      newBody = 'Default Body';
    } else {
      newBody = req.body.body;
    }

    new Card({
      title: newTitle,
      body: newBody,
      priority_id: parseInt(req.body.priority_id), // Might not need to parseInt but feels more secure
      status_id: 1, //Auto generated
      created_by: parseInt(req.body.created_by),
      assigned_to: parseInt(req.body.assigned_to)
    }).save()
    .then((result) => {
      return new Card({id: result.attributes.id})
      .fetch({withRelated: ['priority', 'status', 'createdBy', 'assignedTo']})
      .then((data) => {
        return res.json(data);
      })
      .catch((error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  })
  .delete((req, res) => {
    console.log('delete route');
    new Card({id: req.body.id})
    .destroy()
    .then(() => {
      return res.send('Deleted ', req.body.id);
    })
  })
  .put((req, res) => {
    console.log('put route');
    new Card({id: req.body.id})
    .save({
      title: req.body.title,
      body: req.body.body,
      priority_id: req.body.priority_id, 
      status_id: req.body.status_id,
      created_by: req.body.created_by,
      assigned_to: req.body.assigned_to,
    })
    .then((result) => {
      return res.send(result);
    });
  });

module.exports = router;