
// Filter Products

const products = [
    { name: "Mouse", category: "Electronics", price: 300 },
    { name: "Keyboard", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 500 },
    { name: "Headphone", category: "Electronics", price: 1500 },
    { name: "T-Shirt", category: "Clothing", price: 400 }
];

const filterProducts = (products, category, budget) => {
    return products.filter(product =>
        product.category === category
        &&
        product.price <= budget
    );
};

const result = filterProducts(products, "Electronics", 1000);
console.log(result);