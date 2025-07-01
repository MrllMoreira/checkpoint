import { create, requestValidator } from "../models/requestModel.js";

export default async function createRequestController(req, res) {

    const user = req.body;

    const { success, error, data: requestValited } = requestValidator(user, { id: true });

    // Verifica se a validação falhou (success é false)
    if (!success) {
        return res.status(400).json({
            message: 'Erro ao cadastrar o pedido',
            errors: error.flatten().fieldErrors
        });
    }

    try {
        const result = await create(requestValited);

        return res.status(201).json({
            message: "Pedido criado com sucesso",
            user: result
        });
    } catch (err) {
        return res.status(500).json({
            message: "Erro no servidor ao criar pedido",
            error: err.message
        });
    }
}
