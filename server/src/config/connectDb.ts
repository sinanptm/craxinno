import { connect } from "mongoose";
import { MONGO_URI } from ".";

const connectDb = async()=>{
    try {
        await connect(MONGO_URI!)
    } catch (error) {
        console.log("Error in connecting database", error);
    }
}

export default connectDb