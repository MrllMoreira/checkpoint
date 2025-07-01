import { update } from "../models/companyModel.js"

export default async function putCompanyController(req, res) {
    const {id} = req.params
    const company = req.body

    const result = await update(+id, company);

    return res.json({
        message: "Empresa alterado com sucesso", 
        request:{
            name: "Teste",
        email: "Teste@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}