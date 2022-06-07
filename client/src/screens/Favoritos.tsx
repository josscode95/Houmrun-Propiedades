import { useContext, useEffect } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';
import { PropertiesContainer } from '../styles/screens/home';
import { 
  PropertyCard, 
  PropertyDescription, 
  PropertyImage, 
  PropertyTitle 
} from '../components';


export const Favoritos = () => {

  const { favoritos } = useContext(PropertiesContext);
  
  useEffect(() => {
  }, [favoritos, useContext])

  return (
    <>
      <h1>Favorites Page</h1>
      <PropertiesContainer>
        {
          favoritos.length > 0 
          ?
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
          : <h3>No hay Favoritos</h3>
        }
      </PropertiesContainer>
    </>
  )
}
