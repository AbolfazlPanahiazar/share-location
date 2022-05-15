export enum LocationType {
  HOME = "HOME",
  FAIR = "FAIR",
  BUSINESS = "BUSINESS"
}

export interface ILocation {
  id?: number;
  title: string;
  lat: number;
  long: number;
  type: LocationType;
  logo: string;
}
