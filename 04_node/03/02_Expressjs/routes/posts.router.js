const express = require('express');
const postsRouter = express.Router();
const postsController = require('../controllers/post.controller')

postsRouter.get('/', postsController.getPost)

module.exports = postsRouter;