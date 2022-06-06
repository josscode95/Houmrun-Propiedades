import { Propertie } from "../interfaces/properties";

export interface PropertyState{
  isLoading:boolean;
  properties:Propertie[]|[];
  favoritos:Propertie[]|[];
}