'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.demo);

  // 文章
  

  // 分类
  router.get('/category', controller.category.list);
  router.post('/category/create', controller.category.create);
  router.post('/category/update', controller.category.update);
};
