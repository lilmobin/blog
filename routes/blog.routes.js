// routes/blog.js

const express = require('express');
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require('../controllers/blog');
const { protect } = require('../middleware/auth');
const { postValidator } = require('../validation/blog');
const { validate } = require('../middleware/validation');

router.route('/')
 .get(getAllPosts) 
 .post(protect, postValidator, validate, createPost);

router.route('/:id')
 .get(getPostById) 
 .put(protect, postValidator, validate, updatePost) 
 .delete(protect, deletePost); 

module.exports = router;