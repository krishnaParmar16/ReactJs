import { configureStore } from "@reduxjs/toolkit";
import  ApiSlice  from "../features/Slice";

export const store=configureStore({
    reducer:{
            apiReducer: ApiSlice
    }
})