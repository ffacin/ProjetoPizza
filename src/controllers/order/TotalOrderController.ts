import { Request, Response } from "express";
import { TotalOrderService } from "../../services/order/TotalOrderService";

class TotalOrderController {
    async handle(req: Request, res: Response) {
        const { id_pedido } = req.body;

        const totalOrderService = new TotalOrderService();

        const result = await totalOrderService.execute({ id_pedido });

        return res.json(result);
    }
}

export { TotalOrderController };
