'use strict';

const { port } = require('./config').server;
const server = require('./server');
const app = server();

app.listen({ port }, console.log(`Listening on ${port} ☀️ 🌏`));
