import {PrismaClient} from '@prisma/client'
import {z} from 'zod'

const prisma = new PrismaClient();

const requestSchema = z.object({
    quant_request: z.number({
        required_error: "A quantidade é obrigatória."
    })
    .int({ message: "A quantidade deve ser um número inteiro." })
    .positive({ message: "A quantidade deve ser maior que zero." }),

    user_id: z.string({
        required_error: "O ID do usuário é obrigatório."
    })
    
});

export const requestValidator = (request, partial = null) => {
    if(partial){
        return requestSchema.partial(partial).safeParse(request)
    }
    return requestSchema.safeParse(request)
}

export async function create(request){
    const result = await prisma.request.create({
        data: {
            quant_request: request.quant_request,
            user_id: request.user_id
        }
    })
    return result
}

export async function remove(id){
    const result = await prisma.request.delete({
        where: {
            id
        }
    })
    return result
}

export async function getList(){
    const result = await prisma.request.findMany()
    return result
}

export async function update(id, request) {
    const result = await prisma.request.update({
        where: { id },
        data: {
            quant_request: request.quant_request
        }
    });
    return result;
}