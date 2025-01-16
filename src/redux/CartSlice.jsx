import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [], // Holds items added to the cart
};

const cartSlice = createSlice({
    name: 'cart', // Use 'cart' as the slice name
    initialState,
    reducers: {
        // Add cart-specific actions if needed
    },
});

export default cartSlice.reducer; // Export the reducer
