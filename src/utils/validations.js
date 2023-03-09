export const validationProducts = (product) => {
    const { 
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails
    } = product;
    
    if(title === undefined || description === undefined || code === undefined || price === undefined || status === undefined || stock === undefined || category === undefined || thumbnails === undefined){
        console.log('Fields "undefined"');
        return false;
    } else if(title === null || description === null || code === null || price === null || status === null || stock === null || category === null || thumbnails === null){
        console.log('Fields "null"');
        return false;
    } else if(typeof description !== 'string' || typeof code !== 'string' || typeof price !== 'number' || typeof status !== 'boolean' || typeof stock !== 'number' || typeof thumbnails !== 'string'){
        console.log('Invalid fields');
        return false;
    } else {
        return true
    }
};

export const validationCart = (cartProduct) => {
    const { 
        product,
        
    } = cartProduct;
};