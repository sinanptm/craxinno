import { config } from "dotenv";
config();

const { 
    MONGO_URI,
    CLIENT_URL,
    PORT
} = process.env;

export {
    CLIENT_URL,
    MONGO_URI,
    PORT
}