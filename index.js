'use strict';

const server = require('./web-server/server');

function main() {
  // Add application bootstrap functions
  // such as database connections, prepare background service
  // or anything one needs before running the server
  server.start();
}

main();