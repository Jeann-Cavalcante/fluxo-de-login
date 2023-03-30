const { verify } = require('jsonwebtoken');

function getToken(req, userId) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return {error: true}
  }

  const [, token] = authHeader.split(' ');

  try {
    const verified = verify(token, process.env.SECRET_TOKEN);
    const { user } = verified;

    if(user !== userId) {
      return { error: true }
    }

    console.log(verified.user);

    return { error: false }
  } catch (error) {
    return { error: true }
  }
}

module.exports = getToken;