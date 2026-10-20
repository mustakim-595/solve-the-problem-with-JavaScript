
// Get Available Products
const products = [
    { id: 1, name: "Mouse", price: 300, stock: 10 },
    { id: 2, name: "Keyboard", price: 800, stock: 0 },
    { id: 3, name: "USB Cable", price: 150, stock: 5 },
    { id: 4, name: "Headphone", price: 500, stock: 0 },
    { id: 5, name: "Monitor", price: 5000, stock: 3 }
];

const getAvailableProducts = (products) => {
    return products.filter(
        product => product.stock > 0
    );
};

console.log(getAvailableProducts(products));