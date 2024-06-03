import { Request, Response } from "express";
import { ListKitchenOrdersService } from "../../services/order/ListKitchenOrdersService";

class ListKitchenOrdersController {
    async handle(req: Request, res: Response) {
        const listKitchenOrdersService = new ListKitchenOrdersService();
        const orders = await listKitchenOrdersService.execute();
        
        return res.json(orders);
    }
}

export { ListKitchenOrdersController };
