import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
    reducer: {
        product: productReducer, // Manages product state
        cart: cartReducer,       // Manages cart state
    },
});

export default store;
