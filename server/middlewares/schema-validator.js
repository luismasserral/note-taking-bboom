/* eslint no-underscore-dangle: 0 */

const _ = require('lodash');
const Joi = require('joi');

const Schemas = require('./../db/joi-schemas');

module.exports = (useJoiError = false) => {
  const mustUseJoiError = _.isBoolean(useJoiError) && useJoiError;

  const supportedMethods = ['post', 'put'];

  const validationOptions = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };

  return (req, res, next) => {
    const route = req.route.path;
    const method = req.method.toLowerCase();

    if (_.includes(supportedMethods, method) && _.has(Schemas, route)) {
      const schema = _.get(Schemas, route);

      if (schema) {
        return Joi.validate(req.body, schema, validationOptions, (err, data) => {
          if (err) {
            const JoiError = {
              status: 'failed',
              error: {
                original: err._object,
                details: _.map(err.details, ({ message, type }) => ({
                  message: message.replace(/['"]/g, ''),
                  type,
                })),
              },
            };

            const CustomError = {
              status: 'failed',
              error: 'Invalid request data. Please review request and try again.',
            };

            res.status(422).json(mustUseJoiError ? JoiError : CustomError);
          } else {
            req.body = data;

            next();
          }
        });
      }
    }

    return next();
  };
};
