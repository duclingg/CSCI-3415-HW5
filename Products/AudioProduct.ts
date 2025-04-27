import { NameType, GenreType } from "../Types";
import { Product } from "./Product";

export class AudioProduct extends Product {
    private singer: NameType;
    private genre: GenreType;

    constructor(productName: string, price: number, singer: NameType) {
        super(productName, price);
        this.singer = singer;
        this.genre = this.getGenre();
    }

    getSinger(): NameType {
        return this.singer;
    }

    getGenre(): GenreType {
        return this.genre;
    }

    setSinger(name: NameType): void {
        this.singer = name;
    }

    setGenre(genre: GenreType): void {
        this.genre = genre;
    }

    // virtual functions
    getProdTypeStr(): string {
        return "Music";
    }

    displayContentsInfo(): void {
        console.log("Singer Name:", this.singer.firstName, this.singer.lastName);
        console.log("Genre:", GenreType[this.genre]);
    }
}