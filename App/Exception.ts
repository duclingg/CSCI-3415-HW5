import { prod_id_t } from "./Types"

export class CartOverFlowException extends Error {
    constructor(productName: string, productID: prod_id_t) {
        super(`Product: '${productName}' ID: ${productID} Max Items: 7`);
    }
}

export class CartUnderFlowException extends Error {
    constructor() {
        super('Cart is empty');
    }
}

export class CartSaveException extends Error {
    constructor() {
        super("Failed to save cart.");
    }
}