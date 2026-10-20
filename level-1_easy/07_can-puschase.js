// Check Product Stock Before Purchase

const product = {
    name: "Mouse",
    price: 300,
    stock: 10
};

const canPurchase = (product, quantity) => {
    return product.stock >= quantity;
};

console.log(canPurchase(product, 104));