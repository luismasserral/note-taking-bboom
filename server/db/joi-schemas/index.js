const loginDataSchema = require('./login');
const noteDataSchema = require('./note');

module.exports = {
  '/auth/login': loginDataSchema,
  '/notes': noteDataSchema,
};
