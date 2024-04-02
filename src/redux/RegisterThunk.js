import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

export const registerThunk = createAsyncThunk(
    'user/register',
    async (body) => {
        try {
            const response = await AxiosInstance().post('/users/register', body);
            if (response.status == true) return response.data;

            return null;
        } catch (error) {
            console.log('Error register: ', error.message);
        }
    }
)