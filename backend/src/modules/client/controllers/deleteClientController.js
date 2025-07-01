import { remove } from "../models/clientModel.js";

export default async function deleteClientController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Cliente deletado com sucesso"})
}