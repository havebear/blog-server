/*
 * @Author: bgg 
 * @Date: 2018-06-21 22:11:51  
 * 文章
 */

const BaseService = require('./base');
const ARTICLE = 'hb_article';

class ArticleService extends BaseService {

  /**
   * 获取文章列表
   */
  async list({
    pageIndex = 0,
    pageSize = 10,
    orderBy = 'create_time',
    order = 'DESC',
  }) {
    const { app, ctx } = this;
    try {
      const res = await app.mysql.select(ARTICLE, {
        limit: pageIndex,
        offset: pageSize,
        order: [
          [ orderBy, order.toUpperCase() ],
        ],
      });
      return Object.assign({}, app.config.status.SUCCESS, {
        data: res,
      });
    } catch (err) {
      ctx.status = 500;
      throw (err);
    }
  }

}

module.exports = ArticleService;