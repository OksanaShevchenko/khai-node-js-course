const express = require('express');

const db = require('../db');

const { users } = require('../db/schema');

const router = express.Router();


// handle get request for path /users

router.post('/users', async (request, response) => {

   const { body } = request;

   await db.insert(users).values(body);

   return response.sendStatus(201);

});

router.get('/users', async (request, response, next) => {
  try {
    const result = await db.select().from(users);
    return response.status(200).json(result);
  } catch (err) {
    return next(err);
  }
});
module.exports = router;