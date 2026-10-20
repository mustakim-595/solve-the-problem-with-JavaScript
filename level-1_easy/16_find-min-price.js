
// Find the minimum price

const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "Monitor", price: 5000 },
    { name: "USB Cable", price: 150 },
    { name: "Headphone", price: 1200 }
];

const findMinPrice = (products) => {
    if (products.length === 0) {
        return null
    }
    let minPrice = products[0].price;

    for (let i = 1; i < products.length; i++) {
        const product = products[i];

        if (product.price < minPrice) {
            minPrice = product.price;
        }
    };
    return minPrice;
};
console.log(findMinPrice(products));