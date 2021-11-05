import { Request, Response } from 'express'
import operations from '../utils/operations';

class PrimosController {
    public async ListarPrimos(req: Request, res: Response){ 
        const { num } = req.body;
        return res.send(operations(num));
    }
}

export const primosController = new PrimosController();