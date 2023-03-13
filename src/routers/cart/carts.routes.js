import { Router } from "express";
import cartController from "../../controller/cart.controller.js";

const cartRouter = Router();

cartRouter.post('/', cartController.addNewCart);
cartRouter.get('/:cid', cartController.getCartById);
cartRouter.post('/:cid/product/:pid', cartController.addNewProductCart);

export default cartRouter;