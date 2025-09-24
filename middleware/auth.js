
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const protect = async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    try {
      token = req.cookies.jwt;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "invalid token" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "token not found" });
  }
};

module.exports = { protect };