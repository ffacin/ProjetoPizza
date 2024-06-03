import { Prisma } from '@prisma/client';
import prismaClient from '../../prisma';

class ListFinishedOrdersService {
    async execute() {
        const orders = await prismaClient.pedido.findMany({
            where: {
                rascunho: false // Certifique-se de que esta é uma condição válida para filtrar os pedidos finalizados
            },
            orderBy: {
                criado_em: 'desc' as Prisma.SortOrder // Corrigindo o erro de tipagem aqui
            }
        });

        return orders;
    }
}

export { ListFinishedOrdersService };
