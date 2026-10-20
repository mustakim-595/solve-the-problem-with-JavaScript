
// Process a Product Purchase

const product = {
    name: "Mouse",
    price: 300,
    stock: 7
};

const processPurchase = (product, quantity) => {

    if (quantity <= 0 || quantity > product.stock) {
        return null
    }
    
    return {
        name: product.name,
        totalPrice: product.price * quantity,
        remainingStock: product.stock - quantity
    };
};

console.log(processPurchase(product, 3));