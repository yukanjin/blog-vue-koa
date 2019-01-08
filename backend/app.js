const Koa = require('koa2');

const app = new Koa();

app.use(async (ctx, next) => {
  ctx.response.body = 'hello'
})

app.listen(3000)