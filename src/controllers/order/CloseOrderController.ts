import { Request, Response } from "express";
import { CloseOrderService } from "../../services/order/CloseOrderService";

class CloseOrderController {
    async handle(req: Request, res: Response) {
        const { id_pedido } = req.body;
        
        const closeOrderService = new CloseOrderService();
        const order = await closeOrderService.execute({ id_pedido });
        
        return res.json(order);
    }
}

export { CloseOrderController };
