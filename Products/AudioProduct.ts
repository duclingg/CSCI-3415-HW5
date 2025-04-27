import { NameType } from "../NameType";
import { Product } from "./Product";

enum GenreType {
    Blues, Classical, Country, Folk, Jazz, 
    Metal, Pop, RnB, Rock, HipHop, Alternative
}

class AudioProduct extends Product {
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

const singer: NameType = { firstName: "Bryson", lastName: "Tiller" };
const song = new AudioProduct("Outta Time", 49.99, singer);
song.setGenre(GenreType.RnB);
song.setReviewRate(8.7);

song.displayProdInfo();