module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    'Note',
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      color: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'notes',
      timestamps: true,
    },
  );

  Note.associate = (models) => {
    Note.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
  };

  return Note;
};
