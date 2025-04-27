// product id type
export type prod_id_t = number;

// name record
export interface NameType {
    firstName: string;
    lastName: string;
}

// music genre types
export enum GenreType {
    Blues, Classical, Country, Folk, Jazz, 
    Metal, Pop, RnB, Rock, HipHop, Alternative
}

// film rating types
export enum FilmRateType {
    NotRated, G, PG, PG_13, R, NC_17
}