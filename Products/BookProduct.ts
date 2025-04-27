import { NameType } from "../NameType";
import { Product } from "./Product";

abstract class BookProduct extends Product {
    private author: NameType;
    private pages: number;

    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price);
        this.author = author;
        this.pages = pages;
    }

    getAuthor(): NameType {
        return this.author;
    }

    getPages(): number {
        return this.pages;
    }

    setAuthor(name: NameType): void {
        this.author = name;
    }

    setPages(pages: number): void {
        this.pages = pages;
    }

    displayContentsInfo(): void {
        console.log("Author:", this.author.firstName, this.author.lastName);
        console.log("Pages:", this.pages);
    }
}

class EBookProduct extends BookProduct {
    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price, author, pages);
    }

    getProdTypeStr(): string {
        return "E book";
    }
}

class PaperBookProduct extends BookProduct {
    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price, author, pages);
    }

    getProdTypeStr(): string {
        return "Paper book";
    }
}

const author: NameType = { firstName: "George", lastName: "Orwell" };
const ebook = new EBookProduct("1984", 19.99, author, 200);
ebook.setReviewRate(9.8);

ebook.displayProdInfo();