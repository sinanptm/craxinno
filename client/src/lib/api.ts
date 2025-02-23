import { API_URL } from '@/config';
import { IUser, RegisterPayloads, SignupPayloads } from '@/types';
import axios from 'axios';

const instance = axios.create({
    baseURL: `${API_URL}/api`,
    headers: {
        "Content-Type": "application/json"
    }
});

export const signup = async (data: SignupPayloads): Promise<{ userId: string; }> => {
    const response = await instance.post("/createUser", data);
    return response.data;
};


export const register = async ({ userId, ...data }: RegisterPayloads) :Promise<{user:IUser}>=> {
    const response = await instance.put(`updateUser/${userId}`, data);
    return response.data;
};