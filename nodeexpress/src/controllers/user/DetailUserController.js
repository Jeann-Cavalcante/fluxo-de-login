const { createToken } = require('../../helpers/create-token');
const prisma = require('../../prisma');

async function detailUser(req, res) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    return res.json({
      message: 'Usuário autenticado com sucesso',
      userId: user.id
    }).status(200);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro interno' });
  }
}

module.exports = { detailUser }