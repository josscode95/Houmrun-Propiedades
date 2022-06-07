import { ReactElement, createContext } from 'react';
import { PropContextProps, Propertie } from '../interfaces/properties';

export const PropCardContext = createContext({} as PropContextProps)
const { Provider } = PropCardContext;

interface PropertyCardProps{
  property:Propertie;
  children?:ReactElement|ReactElement[];
}

export const PropertyCard = ({property, children}:PropertyCardProps) => {
  return (
    <Provider value={{
      property
    }}>
      <div>
        { children }
      </div>
    </Provider>
  )
}
