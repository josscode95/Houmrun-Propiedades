import { createContext, useEffect, useReducer } from "react";
import { ChildrenProps, Propertie } from '../interfaces/properties';
import propertiesDB from '../api/propertiesDB';
import { PropertyState, propertyReducer } from './propertiesReducer';

type PropertiesContextProps = {
  properties:Propertie[];
  favoritos:Propertie[];
  cargarPropiedades:()=>Promise<void>;
  filtrarPropiedades:()=>Promise<void>;
  agregarFavorito:(id:string)=>void;
}

const propertiesInitialState:PropertyState = {
  isLoading: false,
  properties: [],
  favoritos: []
}

export const PropertiesContext = createContext({} as PropertiesContextProps);

export const PropertiesProvider = ({children}:ChildrenProps) => {

  const [ state, dispatch ] = useReducer(propertyReducer, propertiesInitialState)

  useEffect(() => {
    cargarPropiedades();
    filtrarPropiedades();
  }, [])
  
  const cargarPropiedades = async() => {
    const resp = await propertiesDB.get<Propertie[]>('/properties');
    dispatch({
      type: 'getProperties',
      payload: resp.data
    })
  }
  
  const filtrarPropiedades = async() => {
    const { data } = await propertiesDB.get<Propertie[]>('/properties');
    const resp = data.filter(({agregadoFav}) => agregadoFav === true);
    dispatch({
      type: 'filterProperties',
      payload: resp
    })
  }

  const agregarFavorito = async(id:string = '') => {
    const resp = await propertiesDB.put(`/properties/${id}`, {agregadoFav: true})
    console.log(resp)
  }

  return (
    <PropertiesContext.Provider value={{
      ...state,
      cargarPropiedades,
      filtrarPropiedades,
      agregarFavorito
    }}>
      { children }
    </PropertiesContext.Provider>
  );
}