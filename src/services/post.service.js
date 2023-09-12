const {
  addPost,
  getAllPosts,
  getSinglePost, updatePost,
} = require('../queries/posts');
const { runQuery } = require('../config/database.config');

/**
 * Add new post
 */
const addNewPost = async (body) => {
  const { title, author } = body;
  const published_at = new Date();
  const result = await runQuery(addPost, [title, author, published_at]);
  return {
    code: 201,
    status: 'success',
    message: 'New post added successfully',
    data: result[0],
  };
};

/**
 * Get all posts
 */
const retrieveAllPosts = async () => {
  const data = await runQuery(getAllPosts);
  return {
    code: 200,
    status: 'success',
    message: 'Posts fetched successfully',
    data,
  };
};

/**
 * Get Single Post
 */
const retrieveSinglePost = async (id) => {
  const result = await runQuery(getSinglePost, [id]);
  return {
    code: 200,
    status: 'success',
    message: 'Single post fetched successfully',
    data: result[0],
  };
};


const updatePostById = async (id, body) => {
  const { title, author } = body;
  const updated_at = new Date();
  const result = await runQuery(updatePost, [title, author, updated_at, id]);
  if (result.rowCount === 1) {
    return {
      code: 200,
      status: 'success',
      message: 'Post updated successfully',
    };
  } else {
    return {
      code: 404,
      status: 'error',
      message: 'Post not found',
    };
  }
};

module.exports = {
  addNewPost,
  retrieveAllPosts,
  retrieveSinglePost,
  updatePostById,
};
