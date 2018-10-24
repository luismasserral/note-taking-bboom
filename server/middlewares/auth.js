const moment = require('moment');
const jwt = require('jsonwebtoken');

const { User } = require('../db/models');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Missing token' });
  }

  const token = req.headers.authorization.split(' ')[1];
  let payload = null;

  try {
    payload = jwt.verify(token, process.env.TOKEN_SECRET);
  } catch (err) {
    return res.status(401).send({ error: 'Wrong token format' });
  }

  if (payload.exp <= moment().unix()) {
    return res.status(401).send({ error: 'Expired token' });
  }

  const user = await User.findById(payload.id);

  if (!user) {
    return res.status(401).send({ error: 'Invalid token' });
  }

  req.user = user;

  return next();
};
