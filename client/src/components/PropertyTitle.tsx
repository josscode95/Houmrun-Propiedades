import { useContext } from 'react';
import { PropCardContext } from './PropertyCard';

export interface PropertyTitleProps{
  title?:string;
  className?:string;
}

export const PropertyTitle = ({className, title}:PropertyTitleProps) => {

  const { property } = useContext(PropCardContext)

  return (
    <span>{ title ? title : property.nombre }</span>
  )
}
