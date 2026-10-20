
// Find the maximum price

const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 5000 },
    { name: "USB Cable", price: 150 },
    { name: "Headphone", price: 1200 }
];

const findMaxPrice = (products) => {
    if(products.length === 0) {
        return null
    }
    let maxPrice = products[0].price;

    for (let i = 1; i < products.length; i++) {
        const product = products[i];

        if (product.price > maxPrice) {
            maxPrice = product.price;
        }
    };
    return maxPrice;
};
console.log(findMaxPrice(products));