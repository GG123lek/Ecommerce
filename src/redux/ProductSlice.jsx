import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [], // Holds the list of products
};

const productSlice = createSlice({
    name: 'product', // Use 'product' as the slice name
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload; // Set the product list
        },
    },
});

export const { setProducts } = productSlice.actions; // Export setProducts
export default productSlice.reducer; // Export the reducer
