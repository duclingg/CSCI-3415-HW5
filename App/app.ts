import { Cart } from './Cart';
import * as Type from './Types';

const owner: Type.NameType = { firstName: "Justin", lastName: "Hoang" };
const cart = new Cart(owner);

console.log("My Cart");
console.log("=======");
console.log(`Cart Owner: ${owner.firstName} ${owner.lastName}`)

cart.readFromFile("cart1.csv");
const prod1 = cart.searchProduct("Outta Time");
const prod2 = cart.searchProduct("The Creative Act");
cart.removeItem(prod1.productID);
cart.removeItem(prod2.productID);
cart.displayCart();

var totalPrice = cart.getPurchasedItems().reduce((sum, product) => sum + product.price, 0);
var averagePrice = totalPrice / cart.getItemNum();

console.log("\n=====Summary of purchase=====");
console.log(`Total number of purchases: ${cart.getItemNum()}`);
console.log(`Total purchasing amount: $${totalPrice.toFixed(2)}`);
console.log(`Average cost: $${averagePrice.toFixed(2)}`);