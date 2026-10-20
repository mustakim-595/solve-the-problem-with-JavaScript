
// Count Products Above Average Price

const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 5000 },
    { name: "USB Cable", price: 150 },
    { name: "Headphone", price: 1200 }
];

const countProductsAboveAverage = (products) => {
    if (products.length === 0) {
        return 0;
    }
    
    let totalPrice = 0;
    let countProduct = 0;

    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
    };
    for (const product of products) {
        if (product.price > totalPrice / products.length) {
            countProduct++;
        };
    };
    return countProduct;
};

const result = countProductsAboveAverage(products);
console.log(result);