import { Link } from "react-router-dom";
import { useContext } from 'react';
import { PropertiesContext } from "../context/PropertiesContext";

export const Sidebar = () => {

  const { filtrarPropiedades } = useContext(PropertiesContext);

  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/favoritos">
        <button
          onClick={filtrarPropiedades}
        >Favoritos</button>
      </Link>
    </>
  )
}
