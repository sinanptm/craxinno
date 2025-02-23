import { NextFunction, Request, Response } from "express";
import CustomError from "../types/CustomError";
import { StatusCode } from "../types";
import User from "../model/User";
import { hash } from 'bcryptjs';

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, phone, password } = req.body;

        validate(email, phone, password);

        const hashedPassword = await hash(password!, 10);

        const userId = (await User.create({ email, phone, password: hashedPassword }))._id;

        res.status(StatusCode.Created).json({ message: "User created successfully", userId });
    } catch (error: any) {
        if (error.code === 11000) {
            const duplicateField = Object.keys(error.keyValue)[0];
            next(new CustomError(`${duplicateField} already exists`, StatusCode.Conflict));
            return;
        }
        next(error);
    }
};


const validate = (email: string, phone: string, password: string) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new CustomError("Invalid email format", StatusCode.BadRequest);
    }

    if (!phone || !/^\d{10,15}$/.test(phone)) {
        throw new CustomError("Invalid phone number format", StatusCode.BadRequest);
    }

    if (!password || !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
        throw new CustomError("Password must be at least 6 characters, include one uppercase letter and one number", StatusCode.BadRequest);
    }

    return;
};

export default createUserController;