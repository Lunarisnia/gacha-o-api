const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const applyRouter = require('./routers');
const { errHandler } = require('./services/utils/errorHandler');

const server = () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  applyRouter(app);
  app.use(errHandler);

  return app;
};

module.exports = server;
