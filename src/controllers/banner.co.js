'use strict';

const { findBanner } = require('../services/data/banner');

const getBanner = async (req, res) => {
  const result = await findBanner();
  res.status(200).json({ data: result });
};

module.exports = { getBanner };
