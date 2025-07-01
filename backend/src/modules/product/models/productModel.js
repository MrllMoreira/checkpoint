import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient();

const productSchema = z.object({ 
  name: z.string({
      invalid_type_error: "O nome deve ser uma string.",
      required_error: "O nome é obrigatório."
    })
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
    .max(255, { message: "O nome deve ter no máximo 255 caracteres." }),

  photo: z.string().optional().nullable(),

  description: z.string({
      invalid_type_error: "A descrição deve ser uma string.",
      required_error: "A descrição é obrigatória."
    })
    .min(3, { message: "A descrição deve ter no mínimo 3 caracteres." })
    .max(255, { message: "A descrição deve ter no máximo 255 caracteres." }),

  price: z.number({
      invalid_type_error: "O preço deve ser um número.",
      required_error: "O preço é obrigatório."
    }),

  category_game: z.string({
      invalid_type_error: "A categoria deve ser uma string.",
      required_error: "A categoria é obrigatória."
    })
    .max(255, { message: "A categoria deve ter no máximo 255 caracteres." }),

  platform: z.string({
      invalid_type_error: "A plataforma deve ser uma string.",
      required_error: "A plataforma é obrigatória."
    })
    .max(255, { message: "A plataforma deve ter no máximo 255 caracteres." }),

  quant_stock: z.number({
      invalid_type_error: "A quantidade de estoque deve ser um número.",
      required_error: "A quantidade de estoque é obrigatória."
    })
});

export const productValidator = (products, partial = null) => {
  return productSchema.safeParse(products);
}

export async function create(products){
  const result = await prisma.products.create({ // singular, verifique no schema.prisma
    data: products
  });
  return result;
}

export async function remove(id){
  const result = await prisma.products.delete({
    where: { id }
  });
  return result;
}

export async function getList(){
  const result = await prisma.products.findMany();
  return result;
}

export async function update(id, products){
  const result = await prisma.products.update({
    where: { id },
    data: products
  });
  return result;
}