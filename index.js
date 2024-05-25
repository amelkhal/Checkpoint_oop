// index.js
const Product = require('./Product');
const ShoppingCartItem = require('./ShoppingCartItem');
const ShoppingCart = require('./ShoppingCart');

// Test the implementation
const product1 = new Product(1, 'Apple', 0.5);
const product2 = new Product(2, 'Banana', 0.3);
const product3 = new Product(3, 'Orange', 0.8);

const cart = new ShoppingCart();
cart.addItem(product1, 3);
cart.addItem(product2, 2);
cart.addItem(product3, 5);

cart.displayCartItems();

cart.removeItem(2);
cart.displayCartItems();
