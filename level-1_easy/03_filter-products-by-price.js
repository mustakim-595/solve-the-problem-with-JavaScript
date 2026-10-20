
// Filter products in the budget

const products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 800 },
    { name: "USB Cable", price: 150 },
    { name: "Headphone", price: 500 }
];

const filterProductsByPrice = (products, budget) => {

    const filteredProducts = products.filter(
        product => product.price <= budget
    );

    return filteredProducts;
};

console.log(filterProductsByPrice(products, 500));