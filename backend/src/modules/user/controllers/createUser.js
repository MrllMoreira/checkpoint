import { create, userValidator } from "../models/userModel.js";

export default async function createUserController(req, res) {
  try {
    const userData = req.body;
    let avatar;

    // Verifica se veio arquivo ou se veio uma URL (caso voce use campo avatarUrl no HTML)
    if (req.file) {
      avatar = `/uploads/${req.file.filename}`; // Caminho local
    } else if (userData.avatarUrl) {
      avatar = userData.avatarUrl; // URL externa (se tiver implementado no front)
    }

    // Montando objeto completo para validar
    const user = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      avatar: avatar, // Pode ser undefined (se nao for obrigatorio)
    };

    // Validacao com Zod
    const { success, error, data: userValidated } = userValidator(user);

    if (!success) {
      return res.status(400).json({
        message: "Erro ao cadastrar o usuario",
        errors: error.flatten().fieldErrors,
      });
    }

    // Insercao no banco
    const result = await create(userValidated);

    return res.status(201).json({
      message: "Usuario criado com sucesso",
      user: result,
    });

  } catch (err) {
  console.error('[ERRO AO CRIAR USUÁRIO]', err);
  return res.status(500).json({
    error: "Erro interno no servidor.",
    message: err.message,
    stack: err.stack
  });
}
}
