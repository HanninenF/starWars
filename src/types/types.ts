export namespace AllTypes {
  export type Root = {
    count: number;
    next: string;
    previous: any;
    results: Result[];
  };

  export type Result = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeWorld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starShips: string[];
    created: string;
    edited: string;
    url: string;
  };
}
