const jwt = require('jsonwebtoken');

const generateToken = payload => jwt.sign(payload, process.env.TOKEN_SECRET, {
  expiresIn: 86400,
});

module.exports = {
  generateToken,
};
