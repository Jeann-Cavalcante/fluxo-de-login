const { createToken } = require('../../helpers/create-token');
const prisma = require('../../prisma');
const { hash } = require('bcryptjs');

async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;

    const passwordHash = await hash(password, 8);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    })

    const token = createToken(user.id);

    return res.json({
      message: 'Usuário criado com sucesso',
      userId: user.id,
      token: token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
  

}

module.exports = {createUser}