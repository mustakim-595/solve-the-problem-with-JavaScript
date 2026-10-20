
// Calculate Total Price

const product = {
    name: "Mouse",
    price: 300,
    stock: 7
};

const calculateTotalPrice = (prodcut, quantity) => {
    return prodcut.price * quantity;
};

console.log(calculateTotalPrice(product, 3));