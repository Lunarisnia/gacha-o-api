'use strict';

const Joi = require('joi');

/**
 * Generate a validation schema using joi to check the type of your environment variables
 */
const envSchema = Joi.object({
  DB_URL: Joi.string(),
})
  .unknown()
  .required();

/**
 * Validate the env variables using joi.validate()
 */
const { error, value: envVars } = envSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  databaseConfig: {
    dbUrl: envVars.DB_URL,
  },
};

module.exports = config;
