import { useContext, useEffect } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';

export const Home = () => {

  const { properties, favoritos } = useContext(PropertiesContext);

  useEffect(() => {
  }, [properties, favoritos])

  return (
    <div>{JSON.stringify(favoritos, null, 5)}</div>
  )
}
