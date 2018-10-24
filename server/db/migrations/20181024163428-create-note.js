module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    text: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    color: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
      type: Sequelize.DATE,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        key: 'id',
        model: 'users',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('notes'),
};
