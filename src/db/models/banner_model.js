const BannerSchema = require('../schemas/banner.sch');
const mongoose = require('mongoose');

module.exports = mongoose.model('Banner', BannerSchema);
