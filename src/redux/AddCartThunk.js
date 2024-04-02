import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../helpers/AxiosInstance";

const addCartThunk = createAsyncThunk(
    'cart/add',
    async (body) => {
        try {
            const response = await AxiosInstance().post('users/addcart', body);
            if (response.status == true) return response.data;
            return null;
        } catch (error) {
            console.log('Error add cart: ', error.message);
        }
    }
)