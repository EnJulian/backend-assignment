const express = require('express');
const PostController = require('../controllers/post.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { checkIfPostExists } = require('../middlewares/post.middleware');

const router = express.Router();

router.post('/', verifyToken, checkIfPostExists, PostController.createPost);
router.get('/', PostController.fetchAllPosts);
router.get('/:id', PostController.fetchSinglePost);

module.exports = router;
