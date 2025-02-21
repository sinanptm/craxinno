import { NextFunction, Request, Response } from "express";

const createUserController = (req:Request, res:Response, next:NextFunction)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export default createUserController;