import { useContext } from 'react';
import { PropertiesContext } from '../context/PropertiesContext';
import { PropCardContext } from './PropertyCard';

export interface PropertyButtonProps{
  className?:string;
}

export const PropertyButton = ({className}:PropertyButtonProps) => {

  const { agregarFavorito } = useContext(PropertiesContext)
  const { data } = useContext(PropCardContext)

  return (
    <div>
      <button
        onClick={() => agregarFavorito(data._id)}
      >Agregar a Favoritos</button>
    </div>
  )
}


