import { update } from "../models/productModel.js"

export default async function putProductController(req, res) {
    const {id} = req.params
    const product = req.body

    const result = await update(+id, product);

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