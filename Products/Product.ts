type prod_id_t = number;

export abstract class Product {
    productID: prod_id_t;
    productName: string;
    price: number;
    reviewRate: number;

    static nextID: prod_id_t;

    constructor(productName: string, price: number) {
        this.productID = Product.createNewID();

        if (productName === "") {
            this.productName = "!No Name Product!";
        } else {
            this.productName = productName
        }

        if (price >= 0.0 && price <= 1000) {
            this.price = price;
        } else {
            console.log("Price must fall in between $0-$1000")
            this.price = 0.0;
        }

        this.reviewRate = this.getReviewRate();
    }

    // gets the product id
    getProdID(): prod_id_t {
        return this.productID;
    }

    // gets the product name
    getProdName(): string {
        return this.productName;
    }

    // gets the product price
    getPrice(): number {
        return this.price;
    }

    // gets the review rate of the product
    getReviewRate(): number {
        return this.reviewRate;
    }

    // set the product id
    setProdID(id: prod_id_t): void {
        this.productID = id;
    }

    // set product name
    setProdName(name: string): void {
        this.productName = name
    }

    // set product price
    setPrice(price: number): void {
        this.price = price;
    }

    // set product review rate
    setReviewRate(rate: number) {
        this.reviewRate = rate;
    }

    // abstract (virtual) functions
    // gets the product type in a string type
    abstract getProdTypeStr(): string;
    
    // displays product derived type-specific information
    abstract displayContentsInfo(): void;

    // displays information about the product
    displayProdInfo(): void {
        console.log("Product ID: ", this.productID);
        console.log("Product Name: ", this.productName);
        console.log("Price: ", this.price.toFixed(2));
        console.log("Review Rate: ", this.reviewRate);

        this.displayContentsInfo();
    }

    // creates a Product-wise next product id
    private static createNewID(): prod_id_t {
        if (!Product.nextID) {
            Product.nextID = 1;
        } else {
            Product.nextID += 1;
        }

        return Product.nextID;
    }
}