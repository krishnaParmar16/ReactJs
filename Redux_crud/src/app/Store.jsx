import { configureStore } from "@reduxjs/toolkit";
import  crudeSlice  from "../feature/CrudSlice";


export const store=configureStore({
    reducer :{
        crudReducer: crudeSlice,
    }
})
