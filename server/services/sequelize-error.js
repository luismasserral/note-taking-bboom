const { sequelize } = require('./../db/models');

module.exports = (error, res) => {
  let errorStatus = 500;
  let errorMessage = error.message;

  switch (error.constructor.name) {
    case sequelize.ExclusionConstraintError.name:
    case sequelize.ForeignKeyConstraintError.name:
    case sequelize.ValidationErrorItem.name:
      errorStatus = 400;
      errorMessage = error.message;

      break;
    case sequelize.UniqueConstraintError.name:
    case sequelize.ValidationError.name:
      errorStatus = 400;
      errorMessage = error.errors.map(singleError => singleError.message).join(', ');

      break;
    default:
      break;
  }

  return res.status(errorStatus).send({
    name: error.name,
    message: errorMessage,
  });
};
