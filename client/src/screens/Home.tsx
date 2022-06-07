import { useContext, useEffect } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';
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
    <div>
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
    </div>
  )
}
