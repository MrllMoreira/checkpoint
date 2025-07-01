import { update } from "../models/kartModel.js"

export default async function putKartController(req, res) {
    const {id} = req.params
    const kart = req.body

    const result = await update(+id, kart);

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