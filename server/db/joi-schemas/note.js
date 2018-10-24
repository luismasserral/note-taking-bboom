const Joi = require('joi');

module.exports = Joi.object({
  text: Joi.string()
    .required()
    .min(1)
    .strict(),
});
