import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addIsOpen: false,
    updateIsOpen: false,
    deleteIsOpen: false
}


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toogleAdd: (state) => {
            state.addIsOpen = !state.addIsOpen;
        },
        toogleEdit: (state) => {
            state.updateIsOpen = !state.updateIsOpen;
        },
        toogleDelete: (state) => {
            state.deleteIsOpen = !state.deleteIsOpen;
        },
        toogle: (state) => {
            state.addIsOpen = !state.addIsOpen;
        },
        toogleUpdate: (state) => {
            state.updateIsOpen = !state.updateIsOpen;
        },
    }
});

export const { toogleAdd, toogleEdit, toogleDelete, toogle, toogleUpdate } = modalSlice.actions;

export default modalSlice.reducer;