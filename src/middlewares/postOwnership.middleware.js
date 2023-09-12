// checkPostOwnership.js
const Post = require('../middlewares/post.middleware');

const checkPostOwnership = async (req, res, next) => {
    try {
        const post = await Post.(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Check if the user is the owner of the post (you should customize this logic)
        if (post.username !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized to update this post' });
        }

        // If the user is authorized, proceed to the next middleware
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = checkPostOwnership;
