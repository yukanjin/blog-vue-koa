const Koa = require('koa2');
const Router = require('koa-router');
const controllers = require('./controllers')

const app = new Koa();
const router = new Router();

// load all router
controllers.forEach(controller => {
  router[controller.method](controller.path, controller.handler)
})

app.use(router.routes())

app.listen(3000)