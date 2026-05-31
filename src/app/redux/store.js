import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./slices/categorySlice";
import productReducer from "./slices/productSlice";
import userReducer from "./slices/userSlice";


export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        user: userReducer,
    }
});