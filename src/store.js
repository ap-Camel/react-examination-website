import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import examReducer from './features/exam/examSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        exam: examReducer,
        modal: modalReducer
    }
});


export default store;