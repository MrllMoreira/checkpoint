import { create, clientValidator } from "../models/clientModel.js";
export default async function createClientController(req, res) {

    const client = req.body;

    const { success, error, data: clientValited } = clientValidator(client, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a cliente', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(clientValited)


    return res.json({
        message: "Cliente criado com sucesso",
        client: result
    }
    )
}