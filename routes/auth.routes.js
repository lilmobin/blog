
const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require('../controllers/auth');
const { protect } = require('../middleware/auth');
const { registerValidator, loginValidator } = require('../validation/auth');
const { validate } = require('../middleware/validation');

router.post('/register', registerValidator, validate, registerUser);

router.post('/login', loginValidator, validate, loginUser);

router.post('/logout', logoutUser);

router.get('/profile', protect, getUserProfile);

module.exports = router;