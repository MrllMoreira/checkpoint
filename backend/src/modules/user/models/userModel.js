import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

//Esquema de validacao (Zod)
const userSchema = z.object({
  name: z.string({
    invalid_type_error: "O nome deve ser uma string.",
    required_error: "O nome e obrigatorio."
  })
  .min(3, { message: "O nome deve ter no minimo 3 caracteres." })
  .max(255, { message: "O nome deve ter no maximo 255 caracteres." }),

  email: z.string({
    invalid_type_error: "O email deve ser uma string.",
    required_error: "O email e obrigatorio."
  })
  .email({ message: "Email invilido." }),

  role: z.enum(['USER', 'ADMIN'], {
    required_error: "A role e obrigatoria."
  }),

  password: z.string({
    invalid_type_error: "A senha deve ser uma string.",
    required_error: "A senha e obrigatoria."
  })
  .min(8, { message: "A senha deve ter no minimo 8 caracteres." })
  .max(255, { message: "A senha deve ter no maximo 255 caracteres." }),

  avatar: z.string().optional().nullable(), // Caminho local ou URL externa
});

//Funcao de validacao
export const userValidator = (user) => userSchema.safeParse(user);

//Funcoes de banco (CRUD)
export async function create(user) {
  return await prisma.user.create({ data: user });
}

export async function remove(id) {
  return await prisma.user.delete({
    where: { id: parseInt(id) }, // Garantindo que seja inteiro
  });
}

export async function getList() {
  return await prisma.user.findMany();
}

export async function update(id, user) {
  return await prisma.user.update({
    where: { id: parseInt(id) }, // Garantindo que seja inteiro
    data: user,
  });
}
