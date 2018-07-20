'use strict';

const cors = require('./config.cors');
const nunjucks = require('./config.nunjucks');
const mysql = require('./config.mysql');
const status = require('./config.status');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528850094397_6917';

  // add your config here
  config.middleware = [];
  // cors
  config.cors = cors;
  // 视图引擎
  config.view = nunjucks;
  // egg-mysql
  config.mysql = mysql;
  // 返回状态吗
  config.status = status;

  return config;
};