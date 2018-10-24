const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'users',
      timestamps: false,
    },
  );

  User.associate = (models) => {
    User.hasMany(models.Note, { as: 'notes' });
  };

  User.prototype.comparePassword = function comparePassword(providedPassword) {
    return bcrypt.compareSync(providedPassword, this.password);
  };

  return User;
};
