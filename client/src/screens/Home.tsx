import { useContext, useEffect } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';
import { HomeTitle, PropertiesContainer } from '../styles/screens/home';
import { 
  PropertyButton, 
  PropertyCard, 
  PropertyDescription, 
  PropertyImage, 
  PropertyTitle 
} from '../components';

export const Home = () => {

  const { properties } = useContext(PropertiesContext);

  useEffect(() => {
  }, [properties])

  return (
    <>
      <HomeTitle>
        Home Page
      </HomeTitle>
      <PropertiesContainer>
        {
          properties.map(property => (
            <PropertyCard
              data={property}
              key={property._id}
            >
              <PropertyTitle />
              <PropertyImage />
              <PropertyDescription />
              <PropertyButton />
            </PropertyCard>
          ))
        }
      </PropertiesContainer>
    </>
  )
}
