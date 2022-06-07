import { ReactElement, createContext } from 'react';
import { PropContextProps, Propertie } from '../interfaces/properties';
import { CardContainer } from '../styles/components/property-card';

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
      <CardContainer>
        { children }
      </CardContainer>
    </Provider>
  )
}
