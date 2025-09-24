
const { body } = require('express-validator');

const registerValidator = [
  body('name').notEmpty().withMessage("name is required"),
  body('email').isEmail().withMessage("email is not valid"),
  body('password')
   .isLength({ min: 6 })
   .withMessage("password should be at least 6 charachters"),
];

const loginValidator = [
  body('email').isEmail().withMessage("email is not validd"),
  body('password').notEmpty().withMessage("passwpr id required"),
];

module.exports = { registerValidator, loginValidator };