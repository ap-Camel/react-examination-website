import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}


const examSlice = createSlice({
    name: "exam",
    initialState,
    reducers: {
        updateExamAnswers: () => {

        }
    }
});


export const { updateExamAnswers } = examSlice.actions;

export default examSlice.reducer;
