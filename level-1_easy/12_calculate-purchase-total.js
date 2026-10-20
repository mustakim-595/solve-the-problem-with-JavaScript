
//Calculate Purchase Total with Stock Validation

const product = {
    name: "Mouse",
    price: 300,
    stock: 7
};

const claculatePurchaseTotal = (product, quantity) => {
    return quantity > 0 && quantity <= product.stock ? product.price * quantity : null
};

console.log(claculatePurchaseTotal(product, 3));