import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../helpers/AxiosInstance";

const getProducts = createAsyncThunk(
    'product/get',
    async () => {
        try {
            const response = await AxiosInstance().get('/products');
            if (response.status == true) return response.data;
            return null;
        } catch (error) {
            console.log('Error get products: ', error.message);
        }
    }
)

export { getProducts }
