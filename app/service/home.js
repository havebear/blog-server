/*
 * @Author: bgg 
 * @Date: 2018-06-21 10:02:51  
 * home
 */

'use strict';

const BaseService = require('./base');


class HomeService extends BaseService {
  async all() {
    const { app, ctx } = this;
    try {
      // 查询所有分类，返回[Array, Object(id, name)]
      const results = await app.mysql.select('hb_categroy', {
        columns: ['id', 'name']
      });
      return results || [];
    } catch (err) {
      ctx.status = 500;
      throw (error);
    }
  }
}

module.exports = HomeService;