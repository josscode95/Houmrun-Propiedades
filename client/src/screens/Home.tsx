import { useContext, useEffect } from 'react'
import { PropertyCard } from '../components/PropertyCard';
import { PropertiesContext } from '../context/PropertiesContext';
import { PropertyImage } from '../components/PropertyImage';
import { PropertyDescription } from '../components/PropertyDescription';
import { PropertyButton } from '../components/PropertyButton';
import { PropertyTitle } from '../components/PropertyTitle';

export const Home = () => {

  const { properties, favoritos } = useContext(PropertiesContext);

  useEffect(() => {
  }, [properties, favoritos])

  return (
    <div>
      {
        properties.map(property => (
          <PropertyCard
            property={property}
            key={property._id}
          >
            <PropertyTitle className="lo-que-quieras" />
            <PropertyImage className="lo-que-quieras" />
            <PropertyDescription className="lo-que-quieras" />
            <PropertyButton className="lo-que-quieras" />
          </PropertyCard>
        ))
      }
    </div>
  )
}
