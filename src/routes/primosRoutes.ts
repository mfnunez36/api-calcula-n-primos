import { Router } from "express"
import { body } from "express-validator";
import validatormiddleware from "../middlewares/validatormiddleware";
import { primosController } from '../controllers/primoscontroller';

class PrimosRoutes {
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() {
        //reglas de los parametros del body
        const validator = [
            body('num').isNumeric().withMessage("debe ser numero entero")
        ];

        //creación de rutas utilizando los metodos del controller
        //validar que sea numerico el parametro con el middleware 
        this.router.post('/listarprimos', validator, validatormiddleware, primosController.ListarPrimos);
    }
}

const primosRouter = new PrimosRoutes();

export default primosRouter.router; 