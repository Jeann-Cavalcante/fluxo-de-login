const { createUser } = require('../controllers/user/CreateUserController');
const { detailUser } = require('../controllers/user/DetailUserController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();

router.post('/', createUser);
router.get('/:id', isAuthenticated, detailUser);


module.exports = router;