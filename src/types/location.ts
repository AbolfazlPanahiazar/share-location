export interface ILocation {
  id?: number;
  title: string;
  lat: number;
  long: number;
  type: "HOME" | "FAIR" | "BUSINESS";
  logo: string;
}
