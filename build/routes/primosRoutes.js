"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validatormiddleware_1 = __importDefault(require("../middlewares/validatormiddleware"));
const primoscontroller_1 = require("../controllers/primoscontroller");
class PrimosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //reglas de los parametros del body
        const validator = [
            (0, express_validator_1.body)('num').isNumeric().withMessage("debe ser numero entero")
        ];
        //creación de rutas utilizando los metodos del controller
        //validar que sea numerico el parametro con el middleware 
        this.router.post('/listarprimos', validator, validatormiddleware_1.default, primoscontroller_1.primosController.ListarPrimos);
    }
}
const primosRouter = new PrimosRoutes();
exports.default = primosRouter.router;
//# sourceMappingURL=primosRoutes.js.map