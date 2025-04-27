import * as Type from "./Types";
import * as Product from "./Products"

class Cart {
    private MAX_ITEMS: number = 7;
    private itemNum: number = 0;
    private owner: Type.NameType;
    private purchasedItems: Product.Product[] = [];

    constructor(owner: Type.NameType) {
        this.owner = owner;
        this.purchasedItems = this.getPurchasedItems();
    }

    getItemNum(): number {
        return this.itemNum
    }

    getOwner(): Type.NameType {
        return this.owner;
    }

    getPurchasedItems(): Product.Product[] {
        return this.purchasedItems;
    }

    setItemNum() {
        this.itemNum = this.purchasedItems.length;
    }

    setOwner(name: Type.NameType) {
        this.owner = name;
    }

    setPurchasedItems(items: Product.Product[]) {
        this.purchasedItems = items;
    }
    
    public addItem(product: Product.Product): boolean {
        if (this.itemNum < this.MAX_ITEMS) {
            this.purchasedItems.push(product);
            this.itemNum++;
            return true;
        } else {
            return false;
        }
    }

    public removeItem(productID: Type.prod_id_t): boolean {
        for (const product of this.purchasedItems) {
            if (product.productID === productID || this.itemNum > 0) {
                this.purchasedItems = this.purchasedItems.filter((prod) => prod.productID !== productID);
                this.itemNum--;
                return true;
            }
        }
        return false;
    }

    public displayCart(): void {
        for (const product of this.purchasedItems) {
            console.log(`\n[${product.getProdTypeStr()}]`);
            product.displayProdInfo()
        }
    }

    private isCartFull(): boolean {
        if (this.itemNum == this.MAX_ITEMS) {
            return true;
        } else {
            return false;
        }
    }
}

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

cart.addItem(song1);
cart.addItem(song2);
cart.addItem(song3);
cart.addItem(movie1);
cart.addItem(movie2);
cart.addItem(book1);
cart.addItem(book2);

// cart.addItem(song4);

cart.displayCart();
console.log(cart.getItemNum());