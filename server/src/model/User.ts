import { Schema, model } from "mongoose";
import IUser from "../types/IUser";

const userSchema = new Schema<IUser>(
    {
        id: { type: String },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        password: { type: String, required: true },
        title: { type: String },
        dateOfBirth: { type: Date },
        homeAddress: { type: String },
        yearsAtAddress: { type: String },
        bio: { type: String },
        employmentStatus: { type: String },
        financialAssets: { type: String },
    },
    { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
