import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./RegisterThunk";
import { loginThunk } from "./LoginThunk";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
        console.log('Saving error: ', error.message);
    }
}


const initialState = {
    user: null,
    isLoading: false,
    error: null,
    quantity: 0,
    cart: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        plusQuantity: (state, action) => {
            state.quantity += 1
            console.log(state.quantity)
        },
        minusQuantity: (state, action) => {
            if (state.quantity > 0) {
                state.quantity -= 1
            }
        },
        setDefaultQuantity: (state, action) => {
            state.quantity = 0
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerThunk.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(registerThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
            .addCase(loginThunk.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
                storeData('user', action.payload)
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error
            })
    }
});

export { userSlice }