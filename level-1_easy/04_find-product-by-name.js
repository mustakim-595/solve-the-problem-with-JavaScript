
// Find the Product by Name

const products = [
    { id: 1, name: "Mouse", price: 300 },
    { id: 2, name: "Keyboard", price: 800 },
    { id: 3, name: "USB Cable", price: 150 },
    { id: 4, name: "Headphone", price: 500 }
];

const findProductByName = (products, productName) => {
    const matchedProduct = products.find(
        product => product.name === productName
    );
    return matchedProduct;
};

console.log(findProductByName(products, "Keyboard"));