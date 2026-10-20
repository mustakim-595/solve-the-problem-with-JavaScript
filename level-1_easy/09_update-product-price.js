
// Update Product Price with Validation

const product = {
    name: "Mouse",
    price: 300,
    stock: 10
};

const updateProductPrice = (product, newPrice) => {

    const updatedProduct = { ...product };

    if (newPrice > 0) {
        updatedProduct.price = newPrice;
        return updatedProduct;
    } else {
        return product;
    };
};

console.log(updateProductPrice(product, 350));
