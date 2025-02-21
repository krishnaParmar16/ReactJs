import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const crudeSlice = createSlice({
    name:"Crud",
    initialState:{
        student:[],
    },
    reducers:{
        AddData:(state,action)=>{
            state.student.push(action.payload)
        },
        DeleteData:(state,action)=>{
            let f_data=state.student.filter((el)=>{
                return el.id != action.payload
            })
            state.student=f_data
        },
        UpdateData:(state,action)=>{

            // console.log(action.payload);
           state.student.map((el,i)=>{
            if(el.id==action.payload.editIndex)
            {
                el.username=action.payload.username;
                el.email=action.payload.email;
                el.password=action.payload.password;
            }
            else{
                el;
            }
           })
        }
    }
})
export const {AddData,DeleteData,UpdateData} =crudeSlice.actions
export default crudeSlice.reducer;
