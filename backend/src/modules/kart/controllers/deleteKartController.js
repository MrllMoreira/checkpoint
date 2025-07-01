import { remove } from "../models/kartModel.js";

export default async function deleteKartController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}