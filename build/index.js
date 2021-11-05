"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const primosRoutes_1 = __importDefault(require("./routes/primosRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.start();
    }
    config() {
        this.app.set('port', process.env.port || 3000); //para tomar puerto actual o 3000
        this.app.use(express_1.default.urlencoded({ extended: true })); //para enviar desde un formulario 
        this.app.use(express_1.default.json()); //para aceptar formatos json y entenderlos antes era BodyParser
        this.app.use((0, morgan_1.default)('dev')); //para ver las peticiones por consola (recibe una propiedad string)
        this.app.use((0, cors_1.default)()); //para que angular pida los datos a nuestro server (no recibe parametros)
    }
    //aquí se registran las rutas
    routes() {
        this.app.use('/api', primosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server en puerto: ", this.app.get('port'));
        });
    }
}
const server = new Server();
exports.default = server.app;
//# sourceMappingURL=index.js.map