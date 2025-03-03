import { z } from 'zod';

export const ProdutoSchema = z
  .object({
    codigo: z.string().min(1, 'Código do produto é obrigatório'),
    nome: z.string().min(3, 'Nome do produto é obrigatório'),
    codigo_barras: z.string().optional(),
    quantidade: z.number().min(0, 'Quantidade do produto é obrigatória'),
    preco: z.number().min(0, 'Preço do produto é obrigatório'),
  })
  .required();

export type ProdutoDto = z.infer<typeof ProdutoSchema>;
export type UpdateProdutoDto = z.infer<
  ReturnType<(typeof ProdutoSchema)['partial']>
>;
