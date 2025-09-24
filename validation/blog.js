
const { body } = require('express-validator');

const postValidator = [
  body('title').notEmpty().withMessage("title is required"),
  body('content').notEmpty().withMessage("content is required"),
];

module.exports = { postValidator };