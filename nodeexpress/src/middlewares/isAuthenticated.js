const {verify} = require('jsonwebtoken');

function isAuthenticated(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const verified = verify(token, process.env.SECRET_TOKEN);

    req.user = verified;

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}