import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addIsOpen: false,
    updateIsOpen: false
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toogle: (state) => {
            state.addIsOpen = !state.addIsOpen
        },
        toogleUpdate: (state) => {
            state.updateIsOpen = !state.updateIsOpen
        }
    }
});

export const { toogle, toogleUpdate } = modalSlice.actions;

export default modalSlice.reducer;