import { NameType, GenreType } from "../App/Types";
import { Product } from "./Product";

export class AudioProduct extends Product {
    private singer: NameType;
    private genre: GenreType;

    constructor(productName: string, price: number, singer: NameType) {
        super(productName, price);
        this.singer = singer;
        this.genre = this.getGenre();
    }

    // get the name of the singer
    getSinger(): NameType {
        return this.singer;
    }

    // get the genre of the music product
    getGenre(): GenreType {
        return this.genre;
    }

    // set the name of the singer
    setSinger(name: NameType): void {
        this.singer = name;
    }

    // set the genre of the music
    setGenre(genre: GenreType): void {
        this.genre = genre;
    }

    // virtual functions
    // get the product type in a string form
    getProdTypeStr(): string {
        return "Music";
    }

    // display additional abstracted information of the music product type
    displayContentsInfo(): void {
        console.log("Singer Name:", this.singer.firstName, this.singer.lastName);
        console.log("Genre:", GenreType[this.genre]);
    }

    toFileString(): string {
        return `${this.productName}, ${this.price}, ${this.singer}, ${this.genre}, ${this.reviewRate}`;
    }
}