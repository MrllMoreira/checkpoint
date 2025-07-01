import { create, kartValidator } from "../models/kartModel.js";
export default async function createKartController(req, res) {

    const kart = req.body;

    const { success, error, data: kartValited } = kartValidator(kart, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a carrinho', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(kartValited)


    return res.json({
        message: "carrinho criado com sucesso",
        user: result
    }
    )
}