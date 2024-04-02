import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { productSlice } from "./products/ProductSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        products: productSlice.reducer
    }
})
