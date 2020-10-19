'use strict';

class InternalError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InternalError';
    this.statusCode = 500;
    this.errId = 1001;
  }
}

class JsonWebTokenError extends Error {
  constructor(message) {
    super(message);
    this.name = 'JsonWebTokenError';
    this.statusCode = 401;
    this.errId = 1004;
  }
}

class InvalidNonceError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidNonceError';
    this.statusCode = 404;
    this.errId = 1005;
  }
}

class InvalidCredentialError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidCredentialError';
    this.statusCode = 400;
    this.errId = 1006;
  }
}

class InvalidUserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidUserError';
    this.statusCode = 404;
    this.errId = 1007;
  }
}

class InvalidNewUserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidNewUserError';
    this.statusCode = 400;
    this.errId = 1008;
  }
}

class ResourceNotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ResourceNotFoundError';
    this.statusCode = 404;
    this.errId = 1009;
  }
}

class PerfexError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = 'PerfexError';
    this.statusCode = statusCode;
    this.errId = 1010;
  }
}

class UserActivationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserActivationError';
    this.statusCode = 400;
    this.errId = 1011;
  }
}

module.exports = {
  InvalidNonceError,
  InvalidCredentialError,
  InvalidUserError,
  InternalError,
  InvalidNewUserError,
  JsonWebTokenError,
  ResourceNotFoundError,
  PerfexError,
  UserActivationError,
};
