import { Router } from "express";
import ProductsController from "../../controller/product.controller.js";


const productsRouter = Router();

productsRouter.get('/', ProductsController.getProducts);
productsRouter.post('/', ProductsController.addProducts);


export default productsRouter;