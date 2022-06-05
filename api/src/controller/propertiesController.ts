import { Response, Request } from 'express';
import Property from '../models/property';

export const obtenerPropiedades = async(req:Request, res:Response) => {
  const properties = await Property.find(); 
  res.json(properties);
}

export const actualizarPropiedad = async(req:Request, res:Response) => {
  const { id } = req.params;
  const { ...data } = req.body;
  const property = await Property.findByIdAndUpdate(id, data, {new: true});
  res.json(property);
}