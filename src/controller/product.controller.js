import ProductManager from "../model/product.container.js";
import { successResponse, errorResponse } from "../utils/api.utils.js";
import { validationProducts } from "../utils/validations.js";

const productManager = new ProductManager('./src/database/product.json');

class ProductsController {

    async getProducts(req, res, next) {
        try {
            const products = await productManager.getProducts()
            const limitValue = +(req.query.limit);
            
            if(!limitValue){
                res.json(products);
            } else {
                const productLimit = [];
                for (let i = 0; i < limitValue && i <= 10; i++) {
                    productLimit.push(products[i])
                }
                res.json(productLimit);
            }
        } 
        catch (error) {
            next(error)
        }
    }
    async getProductsById(req, res, next) {
        try {
            
        } 
        catch (error) {
            next(error)
        }
    }
    async addProducts(req, res, next) {
        try {
            
            const result = validationProducts(req.body)
            
            if(result){
                const newProduct = await productManager.addProducts(req.body);
                const response = successResponse(newProduct);
                res.json(response);
            } else {
                const response = errorResponse(result);
                res.json(response)
            }
        } 
        catch (error) {
            next(error)
        }
    }
    async updateProducts(req, res, next) {
        try {
            
        } 
        catch (error) {
            next(error)
        }
    }
    async deleteProducts(req, res, next) {
        try {
            
        } 
        catch (error) {
            next(error)
        }
    }
};

export default new ProductsController;