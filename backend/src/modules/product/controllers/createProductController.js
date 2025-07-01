import { create, productValidator } from "../models/productModel.js";
export default async function createProductController(req, res) {

    const product = req.body;
    let parse = true;
    try{
        product.price  = parseFloat(product.price);
        product.quant_stock = parseInt(product.quant_stock);
        parse = true
    } catch(err){
        parse = false
    }



    const { success, error, data: productValited } = productValidator(product);
    // Verifica se a validação falhou (success é false)
    if (!success || !parse) {
        // Retorna uma resposta HTTP 400 (Bad Request) com uma mensagem de erro e os erros detalhados por campo
        return res.status(400).json({
            message: 'Erro ao cadastrar a produto', // Mensagem geral do erro
            errors: error.flatten().fieldErrors          // Lista de erros por campo (formato do Zod)
        })
    }

    
    const path = '/uploads/' + req.file.filename;
    const result = await create({...productValited, photo: path})

    return res.json({
        message: "Produto criado com sucesso",
        user: result
    }
    )
}