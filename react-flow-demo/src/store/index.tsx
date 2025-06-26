import { configureStore } from "@reduxjs/toolkit";
import templateSlice from "./slice/templateSlice"

export const store = configureStore({
    reducer: {
        templates: templateSlice
    }
})