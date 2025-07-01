import { remove, userValidator } from "../models/userModel.js"

export default async function deleteUserController(req, res, next) {
    try{
        const {id} = req.params
        const user = {
            id: +id
        }
        const {success, error, data} = userValidator(user, {name: true, email: true, role: true, pass: true, avatar: true})
        if(!success){
            return res.status(400).json({
                message: 'Erro ao deletar usuário, verifique os dados!',
                errors: error.flatten().fieldErrors
            })
        }
        const result = await remove(data.id)
        return res.json({
            message: `User ID ${id} excluido com sucesso!`,
            user: result
        })
    } catch(error){
        if(error?.code === 'P2025' && error?.meta?.cause.includes('Record to delete does not exist')){
            return res.status(404).json({
                message: 'Usuário não encontrada!',
            })
        }
        next(error)
    }
}