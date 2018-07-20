/*
 * @Author: bgg 
 * @Date: 2018-06-21 13:27:36  
 * 分类
*/

'use strict';

const BaseController = require('./base')

class HomeController extends BaseController {

  async list() {
    let { ctx } = this;
    ctx.body = await ctx.service.category.list();
  }

  async create() {
    console.log('--------------------------------------------------------');
    let { ctx } = this;
    ctx.body = await ctx.service.category.create(ctx.request.body);
  }

  async update() {
    let { ctx } = this;
    ctx.body = await ctx.service.category.update(ctx.request.body);
  }

}

module.exports = HomeController;
