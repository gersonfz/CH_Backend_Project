import { Router } from "express";
import productsRoutes from "./products/products.routes.js";
import cartsRoutes from "./cart/carts.routes.js";

const router = Router();

router.use('/products', productsRoutes);
router.use('/cart', cartsRoutes);

export default router;