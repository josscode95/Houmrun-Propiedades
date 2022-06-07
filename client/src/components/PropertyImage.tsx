import { useContext } from "react";
import { PropCardContext } from "./PropertyCard";

export interface PropertyImageProps{
  className?:string;
}

export const PropertyImage = ({className}:PropertyImageProps) => {
  
  const { data } = useContext(PropCardContext)
  
  return (
    <img
      src={data.imagen}
      alt="property"
    />
  )
}
