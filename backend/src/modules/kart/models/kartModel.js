import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const kartSchema = z.object({
  product_id: z.string({
    invalid_type_error: "O ID do produto deve ser um número.",
    required_error: "O ID do produto é obrigatório.",
  }),
  user_id: z.string({
    invalid_type_error: "O ID do usuário deve ser um número.",
    required_error: "O ID do usuário é obrigatório.",
  }),
});

export const kartValidator = (kart, partial = null) => {
  if (partial) {
    return kartSchema.partial(partial).safeParse(kart);
  }
  return kartSchema.safeParse(kart);
};

export async function create(kart) {
  const result = await prisma.kart.create({
    data: {
      product_id: kart.product_id,
      user_id: kart.user_id,
    },
  });
  return result;
}

export async function remove(id) {
  const result = await prisma.kart.delete({
    where: { id },
  });
  return result;
}

export async function getList() {
  const result = await prisma.kart.findMany();
  return result;
}

export async function update(id, kart) {
  const result = await prisma.kart.update({
    where: { id },
    data: {
      product_id: kart.product_id,
      user_id: kart.user_id,
    },
  });
  return result;
}
