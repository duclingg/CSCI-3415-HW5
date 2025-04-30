import { writeFileSync, readFileSync } from "fs";
import * as Type from "./Types";
import * as Product from "../Products"
import * as Exception from "./Exception";

export class Cart {
    private max_items: number = 7;
    private itemNum: number = 0;
    private owner: Type.NameType;
    private purchasedItems: Product.Product[] = [];

    constructor(owner: Type.NameType) {
        this.owner = owner;
        this.purchasedItems = this.getPurchasedItems();
    }

    // get number of items in the cart
    getItemNum(): number {
        return this.itemNum
    }

    // get the name of the cart owner
    getOwner(): Type.NameType {
        return this.owner;
    }

    // get items in the cart
    getPurchasedItems(): Product.Product[] {
        return this.purchasedItems;
    }

    // set the number of items in the cart
    setItemNum() {
        this.itemNum = this.purchasedItems.length;
    }

    // set the owner of the cart
    setOwner(name: Type.NameType) {
        this.owner = name;
    }

    // set items in the cart
    setPurchasedItems(items: Product.Product[]) {
        this.purchasedItems = items;
    }

    // overload cart
    public add(product: Product.Product): Cart {
        this.addItem(product);
        return this;
    }
    
    // add an item
    public addItem(product: Product.Product): boolean {
        try {
            if (!this.isCartFull()) {
                this.purchasedItems.push(product);
                this.itemNum++;
            }
            return true;
        } catch {
            throw new Exception.CartOverFlowException(product.productName, product.productID);
        }
    }

    // remove an item
    public removeItem(productID: Type.prod_id_t): boolean {
        for (const product of this.purchasedItems) {
            if (product.productID === productID || this.itemNum > 0) {
                this.purchasedItems = this.purchasedItems.filter((prod) => prod.productID !== productID);
                this.itemNum--;
                return true;
            }
        }
        throw new Exception.CartUnderFlowException();
    }

    // display the items in the cart with product information
    public displayCart(): void {
        for (const product of this.purchasedItems) {
            console.log(`\n[${product.getProdTypeStr()}]`);
            product.displayProdInfo();
        }
    }

    // save cart contents to file
    public saveCart(cart: Cart, file: string): boolean {
        try {
            const lines: string[] = [];

            for (const product of cart.purchasedItems) {
                const typeStr = product.getProdTypeStr();
                const info = product.toFileString();

                lines.push(`${typeStr}, ${product.productName}, ${product.price}, ${info}, ${product.reviewRate}`);
            }

            const fileContent = lines.join('\n');

            writeFileSync(file, fileContent);
            return true;
        } catch {
            throw new Exception.CartSaveException();
        }
    }

    // read product list from file and add to cart
    public readFromFile(file: string): boolean {
        try {
            const products: Product.Product[] = [];
            
            const lines = readFileSync(file, 'utf-8')
                .split("\n",);

            for (const line of lines) {
                const parts = line.split(", ");

                const typeStr = parts[0]
                const data = parts.slice(1);
                const name = data[2].split(" ");
                
                switch (typeStr) {
                    case "Music":
                        var audioProduct = new Product.AudioProduct(
                            data[0],
                            parseFloat(data[1]),
                            { firstName: name[0], lastName: name[1] }
                        )
                        audioProduct.setGenre(Type.GenreType[data[3].trim() as keyof typeof Type.GenreType]);
                        audioProduct.setReviewRate(parseFloat(data[4]));
                        
                        products.push(audioProduct);
                        break;

                    case "Movie":
                        var videoProduct = new Product.VideoProduct(
                            data[0],
                            parseFloat(data[1]),
                            { firstName: name[0], lastName: name[1] },
                            parseInt(data[3]),
                            parseInt(data[4])
                        )
                        videoProduct.setFilmRate(Type.FilmRateType[data[5].trim() as keyof typeof Type.FilmRateType]);
                        videoProduct.setReviewRate(parseFloat(data[6]));

                        products.push(videoProduct);
                        break;

                    case "E book":
                        var eBookProduct = new Product.EBookProduct(
                            data[0],
                            parseFloat(data[1]),
                            { firstName: name[0], lastName: name[1] },
                            parseInt(data[3])
                        )
                        eBookProduct.setReviewRate(parseFloat(data[4]));

                        products.push(eBookProduct);
                        break;

                    case "Paper book":
                        var paperBookProduct = new Product.PaperBookProduct(
                            data[0],
                            parseFloat(data[1]),
                            { firstName: name[0], lastName: name[1] },
                            parseInt(data[3])
                        )
                        paperBookProduct.setReviewRate(parseFloat(data[4]));

                        products.push(paperBookProduct);
                        break;
                    }
            }

            this.purchasedItems = products;
            this.setItemNum();
            return true;
        } catch {
            throw new Exception.CartImportException(file);
        }
    }

    // search for product by name
    public searchProduct(productName: string): Product.Product {
        for (const product of this.purchasedItems) {
            if (product.productName === productName) {
                product.displayProdInfo();
                return product;
            }
        }
        throw new Exception.CartSearchException(productName);
    }

    // checks if the cart has reached the max_items count
    private isCartFull(): boolean {
        if (this.itemNum === this.max_items) {
            return true;
        } else {
            return false;
        }
    }
}