const getToken = require('../../helpers/get-token');
const prisma = require('../../prisma');

async function detailUser(req, res) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id)
      }
    })

    const verifyToken = getToken(req, user.id)

    if(verifyToken.error) return res.status(401).json({ message: 'Token inválido' });

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