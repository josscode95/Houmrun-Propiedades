import express from "express";
import cors from "cors";
import morgan from "morgan";
import keys from "../keys";
import dbConnection from '../database';

interface Path{
  properties:string;
}

export default class Server{

  private app:express.Application;
  private port:number;
  private paths:Path;

  constructor(){
    this.port = Number(keys.PORT);
    this.app = express();
    this.paths = {
      properties: '/properties'
    }
    this.conectarDB();
    this.middlewares();
    this.routes();
  }

  private async conectarDB(){
    await dbConnection();
  }

  private middlewares(){
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(morgan('dev'));
  }

  private routes(){
    this.app.use(this.paths.properties, require('../routes/properties'));
  }

  public listen(){
    this.app.listen(this.port, () => {
      console.log('Servidor corriendo en el puerto', this.port);
    })
  }

}