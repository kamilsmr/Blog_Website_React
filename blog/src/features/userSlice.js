import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        searchInput: "tech",
        blogData: null,
    },
    reducers:{
        setSignedIn:(state, action) => {
            state.isSignedIn = action.payload;
        },
        setUserData:(state, action) => {
            state.userData = action.payload;
        },
        setInput:(state, action) => {
            state.searchInput = action.payload;
        },
        setBlogData:(state, action) => {
            state.blogData = action.payload;
        },
    },
});

export const {
    setSignedIn,
    setUserData,
    setInput,
    setBlogData,
} = userSlice.actions;

export const selectedSignedIn = (state) => state.user.isSignedIn;
export const selectedUserData = (state) => state.user.userData;
export const selectedUserInput = (state) => state.user.searchInput;
export const selectedSİgnedIn= (state) => state.user.blogData;

export default userSlice.reducer;
