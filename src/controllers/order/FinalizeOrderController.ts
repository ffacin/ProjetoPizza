import { Request, Response } from "express";
import { FinalizeOrderService } from "../../services/order/FinalizeOrderService";

class FinalizeOrderController {
    async handle(req: Request, res: Response) {
        const { id_pedido } = req.body;

        const finalizeOrderService = new FinalizeOrderService();

        const order = await finalizeOrderService.execute({ id_pedido });

        return res.json(order);
    }
}

export { FinalizeOrderController };
