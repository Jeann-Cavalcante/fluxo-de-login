const prisma = require('../../prisma');

async function getUsers(req, res) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    });
    return res.json({
      message: 'Usuários listados com sucesso',
      users: users
    }).status(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = { getUsers }