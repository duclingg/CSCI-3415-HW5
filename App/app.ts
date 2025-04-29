import { Cart } from './Cart';
import * as Type from './Types';
import * as Product from '../Products';

const owner: Type.NameType = { firstName: "Justin", lastName: "Hoang" };
const cart = new Cart(owner);

const song1 = new Product.AudioProduct("Outta Time", 49.99, { firstName: "Bryson", lastName: "Tiller" });
song1.setGenre(Type.GenreType.RnB);
song1.setReviewRate(8.5);

const song2 = new Product.AudioProduct("Sweeter", 39.99, { firstName: "Leon", lastName: "Bridges" });
song2.setGenre(Type.GenreType.Blues);
song2.setReviewRate(9.0);

const song3 = new Product.AudioProduct("Work", 39.99, { firstName: "Charlotte Day", lastName: "Wilson" });
song3.setGenre(Type.GenreType.RnB);
song3.setReviewRate(9.3);

const song4 = new Product.AudioProduct("I Want You Around", 39.99, { firstName: "Snoh", lastName: "Algera" });
song4.setGenre(Type.GenreType.RnB);
song4.setReviewRate(10.0);

const movie1 = new Product.VideoProduct("The Pursuit of Happiness", 9.99, { firstName: "Gabriele", lastName: "Muccino"}, 2006, 117);
movie1.setFilmRate(Type.FilmRateType.PG);
movie1.setReviewRate(9.1);

const movie2 = new Product.VideoProduct("My Neighbor Totoro", 9.99, { firstName: "Hayao", lastName: "Miyazaki" }, 1988, 86);
movie2.setFilmRate(Type.FilmRateType.PG);
movie2.setReviewRate(10.0);

const book1 = new Product.PaperBookProduct("The Creative Act", 19.99, { firstName: "Rick", lastName: "Rubin" }, 250);
book1.setReviewRate(7.9);

const book2 = new Product.EBookProduct("Sapiens: A Brief History of Mankind", 23.99, { firstName: "Yuval Noah", lastName: "Harari" }, 200);
book2.setReviewRate(8.2);




// cart.removeItem(song1.productID);

// cart.addItem(song1);
// cart.addItem(song2);
// cart.addItem(song3);
// cart.addItem(song4);
// cart.addItem(movie1);
// cart.addItem(movie2);
// cart.addItem(book1);
// cart.addItem(book2);
cart.add(song1).add(song2).add(song3).add(song4).add(movie1).add(movie2).add(book1);
// song3.displayProdInfo();

// cart.displayCart();
// cart.saveCart(cart, "cart1.csv");

cart.searchProduct("Work")