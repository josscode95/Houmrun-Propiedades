const { Schema, model } = require('mongoose');

const PropertySchema = Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true
  },
  imagen: {
    type: String,
    required: [true, 'La imagen es obligatorio']
  },
  descripcion:{
    type: String,
    required: true
  },
  agregadoFav:{
    type: Boolean,
    default: false
  }
});

export default model('Property', PropertySchema);