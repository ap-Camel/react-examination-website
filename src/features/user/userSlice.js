import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    firstName: "",
    lastName: "",
    userRole: "",
    userName: "",
    pictureUrl: "",
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
            state.userRole = payload.userRole;
            state.userName = payload.userName;
            state.email = payload.email;
            state.pictureUrl = payload.pictureUrl;
            state.loggedIn = true;
        },
        setLogin: (state, {payload}) => {
            state.loggedIn = payload;
        }
    }
});

export const { setLogin, setUser } = userSlice.actions;

export default userSlice.reducer;