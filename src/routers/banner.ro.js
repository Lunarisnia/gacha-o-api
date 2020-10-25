'use strict';

const { getBanner } = require('../controllers/banner.co');

module.exports = (router) => {
  router.get('/', getBanner);
};
