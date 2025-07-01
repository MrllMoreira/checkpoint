import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const clientSchema = z.object({
  cpf: z.string({
    invalid_type_error: "O cpf deve ser uma string.",
    required_error: "O cpf é obrigatório."
  }).optional(),  // opcional para update

  user_id: z.number({
    invalid_type_error: "O user_id deve ser uma string.",
    required_error: "O user_id é obrigatório."
  }).optional()   // torna opcional para update
});


export const clientValidator = (client, partial = false) => {
  if (partial) {
    return clientSchema.partial().safeParse(client);
  }
  return clientSchema.safeParse(client);
}




export async function create(client) {
  const validation = clientValidator(client);

  if (!validation.success) {
    throw new Error('Cliente inválido: ' + JSON.stringify(validation.error.flatten().fieldErrors));
  }

  const result = await prisma.client.create({
    data: {
      cpf: client.cpf,
      user_id: client.user_id,
    },
  });

  return result;
}

export async function remove(id) {
  const result = await prisma.client.delete({
    where: { id },
  });
  return result;
}

export async function getList() {
  const result = await prisma.client.findMany();
  return result;
}

export async function update(id, client) {
  if (Object.keys(client).length === 0) {
    throw new Error("Pelo menos um campo deve ser informado para atualizar.");
  }

  const validation = clientValidator(client, true);

  if (!validation.success) {
    throw new Error('Cliente inválido: ' + JSON.stringify(validation.error.flatten().fieldErrors));
  }

  const result = await prisma.client.update({
    where: { id },
    data: client
  });

  return result;
}
