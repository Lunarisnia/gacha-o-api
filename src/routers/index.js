'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const routerDefault = express.Router();

const baseName = path.basename(__filename);

function applyRouter(app) {
  routerDefault.get('/', (_, res) =>
    res.send({ message: 'oke', data: 'Welcome to API SUN' }),
  );

  fs.readdirSync(__dirname)
    .filter((file) => file.indexOf('.') !== 0 && file !== baseName)
    .forEach((file) => {
      const router = express.Router();
      const apply = require(path.join(__dirname, file));
      const prefix = file.split('.')[0];
      apply(router);
      app.use(`/v1/${prefix}`, router);
    });

  app.use(`/`, routerDefault);
}

module.exports = applyRouter;
