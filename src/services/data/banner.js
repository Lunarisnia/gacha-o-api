'use strict';
const Banner = require('../../db/models/banner_model');

const findBanner = async () => {
  return await Banner.find();
};

module.exports = { findBanner };
