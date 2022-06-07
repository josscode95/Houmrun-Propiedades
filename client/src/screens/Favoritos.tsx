import { useContext, useEffect } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';
import { 
  PropertyCard, 
  PropertyDescription, 
  PropertyImage, 
  PropertyTitle 
} from '../components';

export const Favoritos = () => {
  const { favoritos } = useContext(PropertiesContext);

  useEffect(() => {
  }, [favoritos])

  return (
    <div>
      {
        favoritos.map(favoritos => (
          <PropertyCard
            data={favoritos}
            key={favoritos._id}
          >
            <PropertyTitle />
            <PropertyImage />
            <PropertyDescription />
          </PropertyCard>
        ))
      }
    </div>
  )
}
