'use strict';

var Hapi = require('hapi');

startServer(8001);

function startServer(port) {
  var server = new Hapi.Server();
  server.connection({
    host: 'localhost',
    port: process.env.PORT || port
  });
  server.route([
    require('./routes/home'),
    require('./routes/notify')
  ]);
  server.start(function () {
    console.log('Server running at: %s', server.info.uri);
  });
}
