import { configureStore } from "@reduxjs/toolkit";
import  apiSlice  from "../feature/apiSlice";


export const store=configureStore({
    reducer:{
        apiReducer:apiSlice,
    }
})