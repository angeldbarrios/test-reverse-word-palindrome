'use strict';

const express = require('express');
const mainController = require('../controllers/mainController');

module.exports = () => {
  const router = express.Router();

  router.use('/', mainController());

  return router;
}