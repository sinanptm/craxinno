import { API_URL } from '@/config';
import axios from 'axios';

const instance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});

type SignupPayloads = {
    email: string;
    phone: string;
    password: string;
};

export const signup = async ({ email, password, phone }: SignupPayloads): Promise<{ userId: string; }> => {
    const response = await instance.post("/createUser", { email, password, phone });
    return response.data;
};