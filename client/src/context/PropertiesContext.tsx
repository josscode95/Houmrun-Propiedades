import react, { createContext, useEffect, useState } from "react";
import { ChildrenProps, Propertie } from '../interfaces/properties';
import propertiesDB from '../api/propertiesDB';

type PropertiesContextProps = {
  properties:Propertie[];
  cargarPropiedades:()=>Promise<void>;
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