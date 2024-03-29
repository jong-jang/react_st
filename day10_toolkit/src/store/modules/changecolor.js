import { createSlice } from '@reduxjs/toolkit';

export const changeColorSlice = createSlice({
    name:'changeColor',
    initialState:{
        color:'hotpink'
    },
    reducers: {
        changeColor: (state,action) => {
            state.color = action.payload
        }      
    }
})

export const { changeColor } = changeColorSlice.actions;
export default changeColorSlice.reducer