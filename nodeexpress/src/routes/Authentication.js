const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('acessou a rota');
  res.send('Hello World');
});

module.exports = router;