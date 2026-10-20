
// Validate a Product Purchase

const product = {
    name: "Mouse",
    price: 300,
    stock: 10
};

const validatePurchase = (product, quantity) => {
    return product.stock >= quantity && quantity > 0;
};

const result = validatePurchase(product, 10);
console.log(result);