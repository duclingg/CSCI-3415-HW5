import { NameType } from "../NameType";
import { Product } from "./Product";

enum FilmRateType {
    NotRated, G, PG, PG_13, R, NC_17
}

class VideoProduct extends Product {
    private directorName: NameType;
    private filmRate: FilmRateType;
    private releaseYear: number;
    private runTime: number;

    constructor(productName: string, price: number, directorName: NameType, releaseYear: number, runTime: number) {
        super(productName, price);
        this.directorName = directorName;
        this.releaseYear = releaseYear;
        this.runTime = runTime;
        this.filmRate = this.getFilmRate();
    }

    getDirector(): NameType {
        return this.directorName
    }

    getFilmRate(): FilmRateType {
        return this.filmRate;
    }

    getReleaseYear(): number {
        return this.releaseYear;
    }

    getRunTime(): number {
        return this.runTime;
    }

    setDirector(name: NameType): void {
        this.directorName = name;
    }

    setFilmRate(rate: FilmRateType): void {
        this.filmRate = rate;
    }

    setReleaseYear(year: number): void {
        this.releaseYear = year;
    }

    setRunTime(time: number): void {
        this.runTime = time;
    }

    isNewRelease(year: number) {
        if (this.releaseYear <= year) {
            return true;
        } else {
            return false;
        }
    }

    getProdTypeStr(): string {
        return "Movie";
    }

    displayContentsInfo(): void {
        console.log("Director:", this.directorName.firstName, this.directorName.lastName);
        console.log("Film Rating:", FilmRateType[this.filmRate]);
        console.log("Release Year:", this.releaseYear);
        console.log(`Run Time: ${this.runTime} hours`);
    }
}

const director: NameType = { firstName: "Michael", lastName: "Bay" };
const movie = new VideoProduct("Transformers", 14.99, director, 2011, 1.5);
movie.setReviewRate(7.5);
movie.setFilmRate(FilmRateType.PG_13);

movie.displayProdInfo();