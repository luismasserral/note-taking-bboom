const Joi = require('joi');

module.exports = Joi.object({
  color: Joi.string()
    .required(),
  text: Joi.string()
    .required()
    .min(1)
    .strict(),
});
