import { Router } from "express";

import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./services/user/middlewares/IsAuthenticated";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { SendOrderController } from "./controllers/order/SendOrderController"; 
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { ListKitchenOrdersController } from "./controllers/order/ListKitchenOrdersController";
import { ListFinishedOrdersController } from "./controllers/order/ListFinishedOrdersController";
import { FinalizeOrderController } from "./controllers/order/FinalizeOrderController";
import { CloseOrderController } from "./controllers/order/CloseOrderController";
import { TotalOrderController } from "./controllers/order/TotalOrderController";



const router: Router = Router();
const upload = multer(uploadConfig.upload('./tmp'));
const removeItemController = new RemoveItemController();
const listKitchenOrdersController = new ListKitchenOrdersController();
const listFinishedOrdersController = new ListFinishedOrdersController();
const finalizeOrderController = new FinalizeOrderController();
const closeOrderController = new CloseOrderController();
const totalOrderController = new TotalOrderController();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/categories', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle);
router.post('/order', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteorder', isAuthenticated, new RemoveOrderController().handle);
router.post('/order/add', isAuthenticated, new AddItemController().handle);
router.put('/order/send', isAuthenticated, new SendOrderController().handle);
router.post("/order/item/remove", isAuthenticated, new RemoveItemController().handle);
router.get("/orders/kitchen", isAuthenticated, new ListKitchenOrdersController().handle);
router.get("/orders/finished", isAuthenticated, new ListFinishedOrdersController().handle);
router.post("/order/finalize", isAuthenticated, new FinalizeOrderController().handle);
router.post("/order/close", isAuthenticated, new CloseOrderController().handle);
router.get("/order/total", isAuthenticated, new TotalOrderController().handle);

export { router };

