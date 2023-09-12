const PostService = require('../services/post.service');

/**
 * Controller function to add new post
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {JSON} - A JSON response containing the posts detail
 */
const createPost = async (req, res, next) => {
  try {
    const result = await PostService.addNewPost(req.body);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const fetchAllPosts = async (req, res, next) => {
  try {
    const result = await PostService.retrieveAllPosts();
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const fetchSinglePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PostService.retrieveSinglePost(id);
    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const postId = req.params.id; // Extract the postId from the request parameters
    const updatedPostData = req.body; // Extract the updated post data from the request body
    const result = await PostService.updatePostById(postId, updatedPostData);

    if (result.code === 404) {
      return res.status(404).json(result);
    }

    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
}

const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id; // Extract the postId from the request parameters
    const result = await PostService.deletePostById(postId);

    if (result.code === 404) {
      return res.status(404).json(result);
    }

    return res.status(result.code).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  fetchAllPosts,
  fetchSinglePost,
  updatePost,
  deletePost
};

