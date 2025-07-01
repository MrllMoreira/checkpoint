import { remove } from "../models/requestModel.js";

export default async function deleteRequestController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}