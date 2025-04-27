import { NameType, prod_id_t } from "./Types";
import { Product } from "./Products/Product";


class Cart {
    private MAX_ITEMS: number = 7;
    private itemNum: number;
    private owner: NameType;
    private purchasedItems: Product[] = new Array(this.MAX_ITEMS);

    constructor(owner: NameType) {
        this.itemNum = this.getItemNum();
        this.owner = owner;
        this.purchasedItems = this.getPurchasedItems();
    }

    getItemNum(): number {
        return this.itemNum
    }

    getOwner(): NameType {
        return this.owner;
    }

    getPurchasedItems(): Product[] {
        return this.purchasedItems;
    }

    setItemNum() {
        this.itemNum = this.purchasedItems.reduce((count) => count + 1, 0);
    }

    setOwner(name: NameType) {
        this.owner = name;
    }

    setPurchasedItems(items: Product[]) {
        this.purchasedItems = items;
    }
    
    public addItem(product: Product): boolean {
        if (this.itemNum < this.MAX_ITEMS) {
            this.purchasedItems.push(product);
            return true;
        } else {
            return false;
        }
    }

    public removeItem(productID: prod_id_t): boolean {
        for (const product of this.purchasedItems) {
            if (product.productID === productID || this.itemNum > 0) {
                this.purchasedItems = this.purchasedItems.filter((prod) => prod.productID !== productID);
                return true;
            }
        }
        return false;
    }

    public displayCart(): void {
        for (const product of this.purchasedItems) {
            console.log(`[${product.getProdTypeStr()}]`);
            console.log(product.displayProdInfo());
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

const owner: NameType = { firstName: "Justin", lastName: "Hoang" };
const cart = new Cart(owner);