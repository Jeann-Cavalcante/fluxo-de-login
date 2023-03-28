const { createUser } = require('../controllers/user/CreateUserController');
const { detailUser } = require('../controllers/user/DetailUserController');

const router = require('express').Router();

router.post('/', createUser);
router.get('/:id', detailUser);


module.exports = router;