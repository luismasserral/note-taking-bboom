const { User } = require('../db/models');

const findByEmail = email => User.findOne({
  where: {
    email,
  },
});

module.exports = {
  findByEmail,
};
