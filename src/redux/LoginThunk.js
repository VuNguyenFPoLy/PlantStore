import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const loginThunk = createAsyncThunk(
    'user/login',
    async (body) => {
        try {
            const response = await AxiosInstance().post('/users/login', body);
            if (response.status == true) return response.data;

            return null;
        } catch (error) {
            console.log('Error register: ', error.message);
        }
    }
)