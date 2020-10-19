const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  res.locals.user = jwt.verify(token, secret);
  next();
};

module.exports = { auth };
