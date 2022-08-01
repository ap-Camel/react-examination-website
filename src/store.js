import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import examReducer from './features/exam/examSlice';
import modalReducer from './features/modal/modalSlice';
import updateExamReducer from "./features/exam/updateExamSlice";
import editModalReducer from "./features/modal/editModalSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        exam: examReducer,
        updateExam: updateExamReducer,
        modal: modalReducer,
        editModal: editModalReducer
    }
});


export default store;