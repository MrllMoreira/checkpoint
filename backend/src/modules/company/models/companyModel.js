import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const companySchema = z.object({
  cnpj: z.string({
    invalid_type_error: 'O CNPJ deve ser uma string.',
    required_error: 'O CNPJ é obrigatório.',
  }),

  user_id: z.string({
    invalid_type_error: 'O user_id deve ser um número.',
    required_error: 'O user_id é obrigatório.',
  }),
});

export const companyValidator = (company, partial = null) => {
  if (partial) {
    return companySchema.partial(partial).safeParse(company);
  }
  return companySchema.safeParse(company);
};

export async function create(company) {
  const validation = companyValidator(company);

  if (!validation.success) {
    throw new Error('Empresa inválida: ' + JSON.stringify(validation.error.flatten().fieldErrors));
  }

  const result = await prisma.company.create({
    data: {
      cnpj: company.cnpj,
      user_id: company.user_id,
    },
  });

  return result;
}

export async function remove(id) {
  const result = await prisma.company.delete({
    where: { id },
  });
  return result;
}

export async function getList() {
  const result = await prisma.company.findMany();
  return result;
}

export async function update(id, company) {
  const validation = companyValidator(company, ['cnpj', 'user_id']);

  if (!validation.success) {
    throw new Error('Empresa inválida: ' + JSON.stringify(validation.error.flatten().fieldErrors));
  }

  const result = await prisma.company.update({
    where: { id },
    data: {
      cnpj: company.cnpj,
      user_id: company.user_id,
    },
  });

  return result;
}
