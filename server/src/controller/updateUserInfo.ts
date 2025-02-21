import { NextFunction, Request, Response } from "express";
import IUser from "../types/IUser";
import User from "../model/User";
import CustomError from "../types/CustomError";
import { StatusCode } from "../types";

const updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;
        await validateUser({ _id: userId });

        const { email, phone, password, ...updateData } = req.body;
        if (email || phone || password) {
            throw new CustomError("Cannot update email, phone, or password", StatusCode.Forbidden);
        }


       await User.findByIdAndUpdate(userId, updateData, { new: true });

        res.status(StatusCode.Success).json({ message: "User data updated" });
    } catch (error) {
        next(error);
    }
};

const validateUser = async ({ _id }: IUser) => {
    const existingUser = await User.findById(_id);
    if (!existingUser) {
        throw new CustomError("User Not Found", StatusCode.BadRequest);
    }
};


export default updateUserInfo;
