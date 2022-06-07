import { useContext } from 'react';
import { PropCardContext } from './PropertyCard';

export interface PropertyTitleProps{
  title?:string;
  className?:string;
}

export const PropertyTitle = ({className, title}:PropertyTitleProps) => {

  const { data } = useContext(PropCardContext)

  return (
    <span>{ title ? title : data.nombre }</span>
  )
}
