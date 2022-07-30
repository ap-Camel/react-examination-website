import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: "",
    title: "",
    numOfQuestions: "",
    duration: "",
    dateToOpen: "",
    passingValue: "",
    numOfPoints: "",
    active: ""
}


const updateExamSlice = createSlice({
    name: "updateExam",
    initialState,
    reducers: {
        setUpdateExam: (state, {payload}) => {
            console.log(payload);
            state.ID = payload.id;
            state.title = payload.title;
            state.numOfQuestions = payload.numOfQuestions;
            state.dateToOpen = payload.dateToOpen;
            state.passingValue = payload.passingValue;
            state.numOfPoints = payload.numOfPoints;
            state.active = payload.active;
            state.duration = payload.duration;
        }
    }
});


export const { setUpdateExam } = updateExamSlice.actions;

export default updateExamSlice.reducer;



// public string title {get; init;} = string.Empty;
//         public int numOfQuestions {get; init;}
//         public int duration {get; init;}
//         public DateTime dateToOpen {get; init;}
//         public int passingValue {get; init;}
//         public int numOfPoints {get; init;}
//         public bool active {get; init;}