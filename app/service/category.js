/*
 * @Author: bgg 
 * @Date: 2018-06-21 11:35:12  
 * 分类 service
 */

'use strict';

const BaseService = require('./base');
const CATEGORY = 'hb_categroy';

class CategoryService extends BaseService {

  /**
   * 查询所有分类，返回[Array, Object(id, name)]
   */
  async list() {
    const { app, ctx } = this;
    try {
      const res = await app.mysql.select(CATEGORY, {
        columns: ['id', 'name']
      });
      return Object.assign({}, app.config.status.SUCCESS, {
        data: res,
      });
    } catch (err) {
      ctx.status = 500;
      throw (err);
    }
  }

  /**
   * 添加分类
   * @param {string} name 分类名称
   */
  async create({name}){
    const { app, ctx } = this;
    if(!name) {
      return Object.assign({}, app.config.status.ERROR, {
        msg: 'name不能为空',
      })
    }
    try {
      const res = await app.mysql.insert(CATEGORY, { name: name });
      return Object.assign({}, app.config.status.SUCCESS, {
        data: res,
      });
    } catch (err) {
      ctx.status = 500;
      throw (err);
    }
  }

  /**
   * 修改分类
   * @param {string} name
   */
  async update({ id, name}){
    const { app, ctx } = this;
    if(!name) {
      return Object.assign({}, app.config.status.ERROR, {
        msg: 'name不能为空',
      })
    }
    try {
      const res = await app.mysql.update(CATEGORY, { id, name});
      return Object.assign({}, app.config.status.SUCCESS, {
        msg: '分类修改成功',
        data: res
      });
    } catch (err) {
      ctx.status = 500;
      throw (err);
    }
  }


}

module.exports = CategoryService;