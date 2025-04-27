import * as Type from "./Types";
import * as Product from "./Products"
import { CartOverFlowException, CartUnderFlowException } from "./Exception";

export class Cart {
    private MAX_ITEMS: number = 7;
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
    
    // add an item
    public addItem(product: Product.Product): boolean {
        if (!this.isCartFull()) {
            this.purchasedItems.push(product);
            this.itemNum++;
            return true;
        } else {
            throw new CartOverFlowException(product.productName, product.productID);
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
        throw new CartUnderFlowException();
        return false;
    }

    // display the items in the cart with product information
    public displayCart(): void {
        for (const product of this.purchasedItems) {
            console.log(`\n[${product.getProdTypeStr()}]`);
            product.displayProdInfo()
        }
    }

    // checks if the cart has reached the MAX_ITEMS count
    private isCartFull(): boolean {
        if (this.itemNum === this.MAX_ITEMS) {
            return true;
        } else {
            return false;
        }
    }
}