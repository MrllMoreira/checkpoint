import { create, companyValidator } from "../models/companyModel.js";
export default async function createCompanyController(req, res) {

    const company = req.body;

    const { success, error, data: companyValited } = companyValidator(company, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a empresa', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(companyValited)


    return res.json({
        message: "Empresa criado com sucesso",
        user: result
    }
    )
}