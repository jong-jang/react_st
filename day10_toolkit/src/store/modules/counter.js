import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name:'count',
  initialState:{
    num:0
  },
  reducers:{
    increment : state => {
      state.num += 1
    },
    decrement : state => {
      state.num -= 1
    },
    add : (state, action) => {
      state.num += action.payload
    },
    reset : state => {
      state.num = 0
    },
    sub : (state, action) => {
      state.num -= action.payload
    },

  }
})

export const {increment, decrement, add, reset, sub} = counterSlice.actions;
export default counterSlice.reducer