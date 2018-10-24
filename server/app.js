const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);
require('./db/models');

const port = parseInt(process.env.PORT, 10);
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

module.exports = app;
