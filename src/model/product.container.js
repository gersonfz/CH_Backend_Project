import fs from 'fs';
import { randomUUID } from 'crypto';


export default class ProductManager {
    #path
    constructor(path) {
        this.#path = path
    }

    async #readingJSON(){
        try {
            const data = await fs.promises.readFile(this.#path, 'utf-8');
            const dataJSON = JSON.parse(data);
            return dataJSON;
        } 
        catch (error) {
            console.log(error);
        }
    }
    async #fileSaving(item){
        try {
            const dataJSON = JSON.stringify(item);
            await fs.promises.writeFile(this.#path, dataJSON);
        } 
        catch (error) {
            console.log(error);
        }
    }
    async addProducts(item){
        try {
            const products = await this.#readingJSON();               
                item.id = randomUUID();
                products.push(item);
                this.#fileSaving(products);
                console.log('Product add');
            
        } 
        catch (error) {
            console.log(error);
        }
    }
    async getProducts(){
        try {
            return await this.#readingJSON();
        } 
        catch (error) {
            console.log(error);
        }
    }
    async getProductsById(id){
        try {
            const product = await this.#readingJSON();
            let productById;
            product.map(item => {
                item.id === id && (productById = item);
            });
            return productById;
        }
        catch (error) {
            console.log(error);
        }
    }
    async updateProduct(item){
        try {
            const product = await this.#readingJSON();
            const productId = product.findIndex(product => product.id === item.id)
            if(productId >= 0){
                product[productId] = item
                await this.#fileSaving(product);
                console.log('Update');
            } else {
                console.log('Error not found');
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
    async deleteProduct(id){
        try {
            const product = await this.#readingJSON();
            const productId = product.findIndex(item => item.id === id);
            if(productId >= 0) {
                product.splice(productId, 1);
                await this.#fileSaving(product);
                console.log('Product delete');
            } else {
                console.log('Error not found');
            }
        } 
        catch (error) {
            console.log(error);
        }
    }
}