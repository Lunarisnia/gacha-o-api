'use strict';

const errHandler = (err, req, res, next) => {
  const { name, message, statusCode, errId } = err;
  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }

  switch (name) {
    case 'TokenExpiredError':
      return res.status(401).json(errorFormatter(1002, name, message));
    case 'ValidationError':
      return res
        .status(400)
        .json(errorFormatter(1003, name, err.details[0].message));
    case 'JsonWebTokenError':
      return res.status(401).json(errorFormatter(1004, name, message));
    default:
      return res
        .status(statusCode || 500)
        .json(
          errorFormatter(
            errId || 1001,
            name || 'InternalError',
            message || 'Internal Server Error',
          ),
        );
  }
};

const errorFormatter = (id, name, message) => ({
  error: { id, name, message },
});

module.exports = { errHandler };
