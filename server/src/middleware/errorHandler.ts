import { NextFunction, Request, Response } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = err.statusCode || 500;
    res.status(status).json({ error: err.message });
};

export default errorHandler;