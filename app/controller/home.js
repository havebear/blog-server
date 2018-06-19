'use strict';

const BaseController = require('./base')

class HomeController extends BaseController {
  // async index() {
  //   this.ctx.body = 'hi, egg';
  // }

  async index() {
    const dataList = {
      title: '凡所在的世界',
      list: [{
          id: 1,
          title: 'this is news 1',
          url: '/news/1'
        },
        {
          id: 2,
          title: 'this is news 2',
          url: '/news/2'
        }
      ]
    };
    await this.ctx.render('index.tpl', dataList);
  }
}

module.exports = HomeController;