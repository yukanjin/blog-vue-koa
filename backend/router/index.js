const controllers = require('../controllers');

const Router = require('koa-router');
const router = new Router()


const initRouter = (app) => {
  controllers.forEach(controller => {
    router[controller.method](controller.path, controller.handler)
  })
  app.use(router.routes())
}
module.exports = initRouter

