
const addPost = `
    INSERT INTO posts(
        title,
        author,
        published_at
    ) VALUES ($1,$2,$3) RETURNING id, title, user_id, author, published_at, created_at
`;

const getPostByTitle = `
        SELECT id, title, author, user_id FROM posts WHERE title=$1
`;

const getAllPosts = `
        SELECT * FROM posts
`

const getSinglePost = `
        SELECT id, title, author, user_id, published_at, created_at
        FROM posts WHERE id=$1
`

const updatePost = `
    UPDATE posts
    SET title=$2, author=$3, updated_at=$4
    WHERE id=$1
    RETURNING id, title, author, user_id, published_at, updated_at
`


const deletePost = `
    DELETE FROM posts
    WHERE id=$1
    RETURNING id, title, author, user_id, published_at, created_at
`;

module.exports = {
    addPost,
    getPostByTitle,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
};


is

ijoiwjqe
weoirwer
