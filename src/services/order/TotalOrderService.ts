import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string;
}

class TotalOrderService {
    async execute({ id_pedido }: OrderRequest) {
        const items = await prismaClient.item.findMany({
            where: {
                id_pedido: id_pedido
            },
            include: {
                fk_item_produto: true // Certifique-se de que `fk_item_produto` está corretamente definido no Prisma schema
            }
        });

        const total = items.reduce((acc, item) => {
            return acc + item.quantidade * item.fk_item_produto.preco;
        }, 0);

        const order = await prismaClient.pedido.findUnique({
            where: {
                id: id_pedido
            },
            select: {
                id: true,
                mesa: true,
                nome: true,
                status: true,
                rascunho: true,
                criado_em: true
            }
        });

        return { order, total };
    }
}

export { TotalOrderService };
