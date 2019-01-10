const Koa = require('koa2');
const cors = require('koa2-cors');
const initRouter = require('./router');

const app = new Koa();

app.use(cors());
initRouter(app)

app.listen(3000)
console.log('start listening port 3000!')