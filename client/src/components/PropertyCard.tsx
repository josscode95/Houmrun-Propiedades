import { ReactElement, createContext } from 'react';
import { PropContextProps, Propertie } from '../interfaces/properties';

export const PropCardContext = createContext({} as PropContextProps)
const { Provider } = PropCardContext;

export interface PropertyCardProps{
  data:Propertie;
  children?:ReactElement|ReactElement[];
}

export const PropertyCard = ({data, children}:PropertyCardProps) => {
  return (
    <Provider value={{
      data
    }}>
      <div>
        { children }
      </div>
    </Provider>
  )
}
