import { NextFunction, Request, Response } from "express";
import { validationResult } from 'express-validator';

const validatormiddleware = (req: Request, res:Response, next: NextFunction) => {
    const errors = validationResult(req);
        
    if (!errors.isEmpty()) {
        return res.json({ error: errors.array() })
    }
    next();
}

export default validatormiddleware;