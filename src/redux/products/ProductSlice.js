import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductThunk";

const initialState = {
    products: [],
    listPayment: [],
    isLoading: false,
    error: null
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setListPayment: ((state, action) => {
            state.listPayment = action.payload;
            console.log(action.payload)
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }
})
export const { setListPayment: setListPaymentAction } = productSlice.actions;
export { productSlice }