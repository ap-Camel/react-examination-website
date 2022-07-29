import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toogle: (state) => {
            state.isOpen = !state.isOpen
        }
    }
});

export const { toogle } = modalSlice.actions;

export default modalSlice.reducer;