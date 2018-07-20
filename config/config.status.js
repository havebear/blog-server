/*
 * @Author: bgg 
 * @Date: 2018-06-21 13:42:46  
 * 返回状态
 */

'use strict';

const status = {
  // 请求成功
  SUCCESS: {
    code: 0,
    msg: '请求成功',
  },

  // token不合法或者token过期了
  ERROR_TOKEN: {
    code: 4100,
    msg: '用户登录信息失效，请重新登录',
  },

  // 请求失败
  ERROR: {
    code: 4200,
    msg: '请求失败',
  },
}

module.exports = status;