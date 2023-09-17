import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    
    initialState: {
        isLoggedIn: false,
        data: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.isLoggedIn = true;
            state.data.push(action.payload);
        },
        clearUser: (state) => {
            state.isLoggedIn = false;
            state.data = [];
        }
    }
})

export const { addUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;
