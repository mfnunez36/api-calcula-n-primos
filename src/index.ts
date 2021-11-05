import express, { Application } from 'express';
import primosRoutes from './routes/primosRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server {
    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        //dejar correr una terminal y luego comentar "this.start();" para probar con jest 
        this.start();
    }

    config(): void {
        this.app.set( 'port', process.env.port || 3000 ); //para tomar puerto actual o 3000
        this.app.use(express.urlencoded({extended: true})); //para enviar desde un formulario 
        this.app.use(express.json()); //para aceptar formatos json y entenderlos antes era BodyParser
        this.app.use(morgan('dev')); //para ver las peticiones por consola (recibe una propiedad string)
        this.app.use(cors()); //para que angular pida los datos a nuestro server (no recibe parametros)
    }


    //aquí se registran las rutas
    routes(): void {
        this.app.use('/api', primosRoutes);
    }


    start(): void {
        this.app.listen(this.app.get('port'), () => { 
            console.log("Server en puerto: ", this.app.get('port') );
        });
    }
}

const server = new Server();
export default server.app;