import { NameType } from "../App/Types";
import { Product } from "./Product";

abstract class BookProduct extends Product {
    private author: NameType;
    private pages: number;

    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price);
        this.author = author;
        this.pages = pages;
    }

    // get the name of the author
    getAuthor(): NameType {
        return this.author;
    }

    // get number of pages in the book
    getPages(): number {
        return this.pages;
    }

    // set the name of the author
    setAuthor(name: NameType): void {
        this.author = name;
    }

    // set number of pages in book
    setPages(pages: number): void {
        this.pages = pages;
    }

    // virtual functions
    // display additional abstraction product information
    displayContentsInfo(): void {
        console.log("Author:", this.author.firstName, this.author.lastName);
        console.log("Pages:", this.pages);
    }

    // string resprentation for file output
    toFileString(): string {
        return `${this.author.firstName} ${this.author.lastName}`;
    }
}

export class EBookProduct extends BookProduct {
    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price, author, pages);
    }

    // virtual functions
    // get the product type in string form
    getProdTypeStr(): string {
        return "E book";
    }
}

export class PaperBookProduct extends BookProduct {
    constructor(productName: string, price: number, author: NameType, pages: number) {
        super(productName, price, author, pages);
    }

    // virtual functions
    // get the product type in string form
    getProdTypeStr(): string {
        return "Paper book";
    }
}