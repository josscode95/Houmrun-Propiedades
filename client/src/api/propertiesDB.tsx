import axios from "axios";

const propertiesDB = axios.create({
  baseURL: 'https://prop-tech-jpm.herokuapp.com'
});

export default propertiesDB;