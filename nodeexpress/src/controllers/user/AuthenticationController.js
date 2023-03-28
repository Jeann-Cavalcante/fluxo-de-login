const { compare } = require('bcryptjs');
const prisma = require('../../prisma');

async function auth(req, res) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    } 

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    return res.json(user).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = {auth};