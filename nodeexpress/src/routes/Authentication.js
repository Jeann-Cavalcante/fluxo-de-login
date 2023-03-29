const { auth } = require('../controllers/user/AuthenticationController');

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('acessou a rota');
  res.json({message: 'acessou a rota'});
});

router.post('/', auth);

module.exports = router;