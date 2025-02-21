import { Schema, model } from "mongoose";
import IUser from "../types/IUser";

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        fullName: { type: String },
        title: { type: String },
        dateOfBirth: { type: Date },
        homeAddress: { type: String },
        yearsAtAddress: { type: String },
        bio: { type: String },
        employmentStatus: { type: String },
        financialAssets: { type: String },
    },
    { 
        timestamps: true,
        versionKey:false
     }
);

const User = model<IUser>("User", userSchema);

export default User;
