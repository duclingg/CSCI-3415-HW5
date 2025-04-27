import * as Type from "./Types";
import * as Product from "./Products"

export class Cart {
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
        if (!this.isCartFull()) {
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
        console.log("There are no items in the cart!");
        return false;
    }

    public displayCart(): void {
        for (const product of this.purchasedItems) {
            console.log(`\n[${product.getProdTypeStr()}]`);
            product.displayProdInfo()
        }
    }

    private isCartFull(): boolean {
        if (this.itemNum === this.MAX_ITEMS) {
            return true;
        } else {
            return false;
        }
    }
}