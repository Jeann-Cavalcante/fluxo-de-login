const { createUser } = require('../controllers/user/CreateUserController');
const { detailUser } = require('../controllers/user/DetailUserController');
const { getUsers } = require('../controllers/user/GetusersController');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = require('express').Router();

router.post('/', createUser);
router.get('/', isAuthenticated, getUsers);
router.get('/:id', isAuthenticated, detailUser);


module.exports = router;