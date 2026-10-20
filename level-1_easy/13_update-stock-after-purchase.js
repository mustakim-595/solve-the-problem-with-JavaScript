
// Update Stock After Purchase

const product = {
    name: "Mouse",
    price: 300,
    stock: 7
};

const updateStockAfterPurchase = (product, quantity) => {
    const updatedProduct = { ...product };

    if (quantity <= 0 || quantity > product.stock) {
        return null
    } else {
        updatedProduct.stock -= quantity;
        return updatedProduct;
    }
};

console.log(updateStockAfterPurchase(product, 3));