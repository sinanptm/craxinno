import { NextFunction, Request, Response } from "express";

const addPersonalInfoController = (req:Request, res:Response, next:NextFunction)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}

export default addPersonalInfoController