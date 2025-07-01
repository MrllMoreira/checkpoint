import { create, feedbackValidator } from "../models/feedbackModel.js";
export default async function createFeedbackController(req, res) {

    const feedback = req.body;

    const { success, error, data: feedbackValited } = feedbackValidator(feedback, { id: true })

    // Verifica se a validação falhou (success é false)
    if (!success) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a feedback', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    const result = await create(feedbackValited)


    return res.json({
        message: "Feedback criado com sucesso",
        user: result
    }
    )
}