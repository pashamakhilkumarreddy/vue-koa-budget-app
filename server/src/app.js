const Koa = require('koa');
// const router = require('koa-router');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const compression = require('koa-compress');
const helmet = require('koa-helmet');

const app = new Koa();

app.use(koaBody());
app.use(cors());
app.use(helmet());
app.use(compression());

const PORT = 4000;

app.listen(PORT, () => {
  console.info(`The server is up and running on ${PORT}`);
});
