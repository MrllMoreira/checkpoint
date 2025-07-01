import { remove } from "../models/feedbackModel.js";

export default async function deleteFeedbackController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}