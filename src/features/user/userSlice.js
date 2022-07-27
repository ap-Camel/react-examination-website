import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    loggedIn: false
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.role = payload.userType;
            state.email = payload.email;
            state.loggedIn = true;
        },
        setLogin: (state, {payload}) => {
            state.loggedIn = payload;
        }
    }
});

export const { setLogin, setUser } = userSlice.actions;

export default userSlice.reducer;