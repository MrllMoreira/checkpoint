import { remove } from "../models/productModel.js";

export default async function deleteProductController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Usuário deletado com sucesso"})
}