'use strict';

const express = require('express');
const routesLoader = require('./load-routes');

module.exports = () => {
  const app = express();

  // Add middlewares here:
  // Some segurity headers --> helmet https://www.npmjs.com/package/helmet
  // Some request limiter --> https://www.npmjs.com/package/rate-limiter-flexible
  // maybe cors --> https://www.npmjs.com/package/cors

  app.use(routesLoader());

  app.use((_req, res, _next) => {
    return res.status(404).json({
      error: "Not Found",
    });
  });

  app.use((err, _req, res, _next) => {
    res.status(500).json({
      success: false,
      message: err.stack // just for development purposes
    });
  });

  return app;
};