import { Router } from 'express';
import { 
  actualizarPropiedad, 
  obtenerPropiedades 
} from '../controller/propertiesController';

const router = Router();

router.get('', obtenerPropiedades);

router.put('/:id', actualizarPropiedad);

module.exports = router;