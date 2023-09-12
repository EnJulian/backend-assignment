const { runQuery } = require('../config/database.config');
const { getPostByTitle: getPostByTitle } = require('../queries/posts');

const checkIfPostExists = async (req, res, next) => {
  try {
    const { title } = req.body;
    const post = await runQuery(getPostByTitle, [title]);
    if (post.length > 0) {
      throw {
        code: 409,
        status: 'error',
        message: 'Post already exist',
        data: null,
      };
    }
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  checkIfPostExists
};
