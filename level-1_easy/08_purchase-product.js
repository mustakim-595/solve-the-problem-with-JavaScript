// Update Product Stock After Purchase

const product = {
    name: "Mouse",
    price: 300,
    stock: 10
};

const purchaseProduct = (product, quantity) => {

    let updatedProduct = {
        ...product,
    };

    if (quantity <= product.stock) {
        updatedProduct.stock -= quantity;
    };

    return updatedProduct;
};

console.log(purchaseProduct(product, 4));