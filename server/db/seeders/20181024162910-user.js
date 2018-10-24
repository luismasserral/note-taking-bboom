const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'users',
    [
      {
        email: 'user1@email.com',
        password: bcrypt.hashSync('123456', 8),
      },
      {
        email: 'user2@email.com',
        password: bcrypt.hashSync('123456', 8),
      },
      {
        email: 'user3@email.com',
        password: bcrypt.hashSync('123456', 8),
      },
    ],
    {},
  ),
  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
