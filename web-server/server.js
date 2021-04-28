'use strict';

const http = require('http');
const chalk = require('chalk');
const getApp =  require('./app');

function start() {
  const port = 3000;
  const app = getApp();
  
  // TODO: add support for https
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(chalk.green(`Server listening on port ${port}`));
  });

}

module.exports = {
  start
}