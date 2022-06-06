import react, { createContext, useEffect, useState } from "react";
import { ChildrenProps, Propertie } from '../interfaces/properties';
import propertiesDB from '../api/propertiesDB';
import { PropertyState } from "./propertiesReducer";

type PropertiesContextProps = {
  properties:Propertie[];
  cargarPropiedades:()=>Promise<void>;
}

const propertiesInitialState:PropertyState = {
  isLoading: false,
  properties: [],
  favoritos: []
}

export const PropertiesContext = createContext({} as PropertiesContextProps);

export const PropertiesProvider = ({children}:ChildrenProps) => {

  const [ properties, setProperties ] = useState<Propertie[]>([]);

  useEffect(() => {
    cargarPropiedades();
  }, [])
  
  const cargarPropiedades = async() => {
    const resp = await propertiesDB.get<Propertie[]>('/properties');
    setProperties(resp.data)
  }

  return (
    <PropertiesContext.Provider value={{
      properties,
      cargarPropiedades
    }}>
      { children }
    </PropertiesContext.Provider>
  );
}