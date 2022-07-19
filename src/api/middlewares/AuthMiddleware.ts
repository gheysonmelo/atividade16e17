import { NextFunction, Request, Response } from "express";
import AppError from "../../utils/AppError";
import jwt from "jsonwebtoken";
import { secret } from "../../config/auth.config";

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if(!token) {
        throw new AppError("MissedToken", "O token não está presente na requisição", 401);
    } 
    
    try {
        jwt.verify(token, secret);
    } catch (err) {
        throw new AppError("InvalidToken", "O token é inválido", 401);
    }

    next()
} 