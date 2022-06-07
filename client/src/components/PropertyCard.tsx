import { ReactElement } from 'react'
import { Propertie } from '../interfaces/properties';

interface PropertyCardProps{
  property:Propertie;
  children?:ReactElement|ReactElement[];
}

export const PropertyCard = ({property, children}:PropertyCardProps) => {
  return (
    <div>
      { children }
    </div>
  )
}
