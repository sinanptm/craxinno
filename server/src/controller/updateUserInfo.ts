import { NextFunction, Request, Response } from "express";
import User from "../model/User";
import CustomError from "../types/CustomError";
import { StatusCode } from "../types";

const updateUserInfo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userId = req.params.id;

        const { email, phone, password, ...updateData } = req.body;
        if (email || phone || password) {
            throw new CustomError("Cannot update email, phone, or password", StatusCode.Forbidden);
        }

        const user = await User.findByIdAndUpdate(userId, updateData, { new: true })
            .select("-password -createdAt -updatedAt")  
            .lean()
            .exec();

        if (!user) {
            throw new CustomError("User Not Found", StatusCode.BadRequest);
        }

        res.status(StatusCode.Success).json({ message: "User data updated", user });
    } catch (error) {
        next(error);
    }
};

export default updateUserInfo;
