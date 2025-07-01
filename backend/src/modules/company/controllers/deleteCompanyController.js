import { remove } from "../models/companyModel.js";

export default async function deleteCompanyController (req, res) {
    const {id} = req.params

    const result = await remove(+id)

    return res.json({message: "Empresa deletado com sucesso"})
}