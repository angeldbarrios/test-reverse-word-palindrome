'use strict';

const express = require('express');
const getReverseTextUseCase = require('../use-cases/getReverseTextUseCase');

module.exports = () => {
  const router = express.Router();

  router.get('/iecho', async (req, res, next) => {
    try {
      // This use case function is async but it does no async operation at all
      // I just use it in this way because use cases are generally async 
      const response = await getReverseTextUseCase(req.query.text);
      res.json(response);
    } catch (error) {
      next(error);
    }
  });

  return router;
}