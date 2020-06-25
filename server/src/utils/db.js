const mongoose = require('mongoose');

const {
  db: {
    mongo,
  },
} = require('../config');

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  // DB_USER,
  // DB_PASSWORD,
} = mongo;

const getDBURI = (dbHOST = DB_HOST, dbPORT = DB_PORT, dbName = DB_NAME) => `mongodb://${dbHOST}:${dbPORT}/${dbName}`;

const connectToDB = (mongoURI) => {
  const options = {
    // user: DB_USER,
    // pass: DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };
  return mongoose.connect(mongoURI, options);
};

module.exports = {
  getDBURI,
  connectToDB,
};
