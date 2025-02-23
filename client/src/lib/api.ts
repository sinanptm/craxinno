import { API_URL } from '@/config';
import { SignupPayloads } from '@/types';
import axios from 'axios';

const instance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});

export const signup = async ({ email, password, phone }: SignupPayloads): Promise<{ userId: string; }> => {
    const response = await instance.post("/createUser", { email, password, phone });
    return response.data;
};