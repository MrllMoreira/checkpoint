import { update } from "../models/requestModel.js"

export default async function putRequestController(req, res) {
    const {id} = req.params
    const request = req.body

    const result = await update(+id, request);

    return res.json({
        message: "Usuário alterado com sucesso", 
        request:{
            name: "Teste",
        email: "Teste@gmail.com",
        id: 1,
        avatar: 'http://github.com/KauanLeonel.png'
        } 
    })
}