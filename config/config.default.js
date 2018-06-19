'use strict';

const nunjucks = require('./config.nunjucks');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528850094397_6917';

  // add your config here
  config.middleware = [];
  // 视图引擎
  config.view = nunjucks;

  return config;
};