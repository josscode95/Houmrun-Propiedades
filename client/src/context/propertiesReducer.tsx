import { Propertie } from "../interfaces/properties";

export interface PropertyState{
  isLoading:boolean;
  properties:Propertie[]|[];
  favoritos:Propertie[]|[];
}

type PropertyAction = 
  | { type: 'getProperties', payload:Propertie[] }
  | { type: 'filterProperties', payload:Propertie[]  }

export const propertyReducer = (state:PropertyState, action:PropertyAction):PropertyState => {
  switch(action.type){
    case 'getProperties':
      return {
        ...state,
        properties: action.payload
      }
    case 'filterProperties':
      return {
        ...state,
        favoritos: action.payload
      }
    default:
      return state;
  }
} 