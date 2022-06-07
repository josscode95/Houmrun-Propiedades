import { useContext } from "react";
import { PropertyImg } from "../styles/components/property-img";
import { PropCardContext } from "./PropertyCard";

export interface PropertyImageProps{
  className?:string;
}

export const PropertyImage = ({className}:PropertyImageProps) => {
  
  const { data } = useContext(PropCardContext)
  
  return (
    <PropertyImg
      src={data.imagen}
      alt="property"
    />
  )
}
