const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const compression = require('koa-compress');
const helmet = require('koa-helmet');
const logger = require('koa-logger');
const {
  getDBURI,
  connectToDB,
} = require('./utils/db');

const {
  server,
} = require('./config');

const app = new Koa();

app.use(logger());
app.use(koaBody());
app.use(cors());
app.use(helmet());
app.use(compression());

const {
  PORT,
} = server;

require('./routes')({
  app,
});

connectToDB(getDBURI()).then(() => {
  console.info('Successfully connected to the database');
  app.listen(PORT, () => {
    console.info(`The server is up and running on ${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
