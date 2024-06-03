import prismaClient from "../../prisma";

interface OrderRequest {
    id_pedido: string;
}

class CloseOrderService {
    async execute({ id_pedido }: OrderRequest) {
        const order = await prismaClient.pedido.update({
            where: {
                id: id_pedido
            },
            data: {
                rascunho: true
            }
        });
        return order;
    }
}

export { CloseOrderService };
