import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      
      if(state.count > 0)
      {
        state.count = state.count - 1;
      }
      else{
          return;
      }

    },
  },
});

export const { increment, decrement } = counter.actions;
export default counter.reducer;
