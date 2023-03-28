const { auth } = require('../controllers/user/AuthenticationController');

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('acessou a rota');
  res.send('Hello World');
});

router.post('/', auth);

module.exports = router;