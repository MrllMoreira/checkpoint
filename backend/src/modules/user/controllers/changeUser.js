import { update, userValidator } from "../models/userModel.js";

export default async function changeUserController(req, res) {
  try {
    const { id } = req.params;
    const userPartial = req.body;

    // Validar so os campos enviados (parcial)
    const { success, error, data: userValidated } = userValidator(userPartial, true); // true = partial validation

    if (!success) {
      return res.status(400).json({
        message: "Erro na valida��o dos dados para atualiza��o",
        errors: error.flatten().fieldErrors,
      });
    }

    // Atualiza o usuario
    const updatedUser = await update(+id, userValidated);

    return res.json({
      message: "Usu�rio atualizado com sucesso",
      user: updatedUser,
    });
  } catch (err) {
    console.error("Erro ao atualizar usu�rio:", err);
    return res.status(500).json({ error: "Erro interno no servidor." });
  }
}
