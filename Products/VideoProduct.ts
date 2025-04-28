import { NameType, FilmRateType } from "../App/Types";
import { Product } from "./Product";

export class VideoProduct extends Product {
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

    // get the name of the director
    getDirector(): NameType {
        return this.directorName
    }

    // get the rating type of the film
    getFilmRate(): FilmRateType {
        return this.filmRate;
    }

    // get the release year of the film
    getReleaseYear(): number {
        return this.releaseYear;
    }

    // get the total runtime of the film
    getRunTime(): number {
        return this.runTime;
    }

    // set the name of the director
    setDirector(name: NameType): void {
        this.directorName = name;
    }

    // set the film rating type
    setFilmRate(rate: FilmRateType): void {
        this.filmRate = rate;
    }

    // set the release year of the film
    setReleaseYear(year: number): void {
        this.releaseYear = year;
    }

    // set the total run time 
    setRunTime(time: number): void {
        this.runTime = time;
    }

    // checks if the release of the movie is new
    isNewRelease(year: number) {
        if (this.releaseYear <= year) {
            return true;
        } else {
            return false;
        }
    }

    // virtual functions
    // get the product type in string form
    getProdTypeStr(): string {
        return "Movie";
    }

    // display additional abstracted product information
    displayContentsInfo(): void {
        console.log("Director:", this.directorName.firstName, this.directorName.lastName);
        console.log("Film Rating:", FilmRateType[this.filmRate]);
        console.log("Release Year:", this.releaseYear);
        console.log(`Run Time: ${this.runTime} minutes`);
    }

    // string representation for file output
    toFileString(): string {
        return `${this.directorName.firstName} ${this.directorName.lastName}, ${this.releaseYear}, ${this.runTime}, ${this.filmRate}`;
    }
}