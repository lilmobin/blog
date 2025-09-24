
const Blog = require('../models/blog');

const createPost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = new Blog({
      title,
      content,
      author: req.user._id, 
    });

    const createdPost = await post.save();
    res.status(201).json(createdPost);
  } catch (error) {
    res.status(400).json({ message:"error in creating blog", error: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Blog.find({}).populate('author', 'name').sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id).populate('author', 'name');
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: "blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message:"internal server error", error: error.message });
  }
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;

  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "blog not found" });
    }
    if (post.author.toString()!== req.user._id.toString()) {
      return res.status(403).json({ message: "you can't update this blog" });
    }

    post.title = title || post.title;
    post.content = content || post.content;

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: "can not update blog", error: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "blog not found" });
    }
    if (post.author.toString()!== req.user._id.toString()) {
      return res.status(403).json({ message: "you can't remove this blog" });
    }

    await post.deleteOne();
    res.json({ message: "blog deleted" });
  } catch (error) {
    res.status(500).json({ message: "internal server error", error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};