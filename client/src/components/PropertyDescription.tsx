import { useContext } from "react";
import { PropCardContext } from "./PropertyCard";

export interface PropertyDescriptionProps{
  className?:string;
}

export const PropertyDescription = ({className}:PropertyDescriptionProps) => {

  const { data } = useContext(PropCardContext)

  return (
    <div>{ data.descripcion }</div>
  )
}
