'use strict';

// had enabled by egg
// exports.static = true;

// CSRF 的防御方案
exports.security = {
  enable: false,
  csrf: {
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};

// 视图模板引擎
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

// mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};