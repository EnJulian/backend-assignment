const Express = require('express');
const router = Express.Router()
const { createUser, signInUser } = require('../controllers/user.controller')

router.post('/signup', createUser);
router.post('/login', signInUser);

module.exports = router;