import { update } from "../models/userModel.js";

export default async function putUserController(req, res) {
  try {
    const { id } = req.params;
    const user = req.body;

    const result = await update(+id, user); // Atualiza no banco com Prisma

    return res.json({
      message: "Usuario alterado com sucesso",
      user: result //retorna o usuario atualizado de verdade
    });

  } catch (err) {
    console.error('Erro ao atualizar usuario:', err);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
