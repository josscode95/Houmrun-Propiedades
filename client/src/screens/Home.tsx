import React, { useContext } from 'react'
import { PropertiesContext } from '../context/PropertiesContext';

export const Home = () => {

  const { properties } = useContext(PropertiesContext);

  return (
    <div>{JSON.stringify(properties, null, 5)}</div>
  )
}
