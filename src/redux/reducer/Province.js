import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    data: [],
    selected: "",
};

// Create a slice of the Redux store
const provincesSlice = createSlice({
    name: "PROVINCES",
    initialState,
    reducers: {
        setProvinces: (state, action) => {
            state.data = action.payload;
        },
        clearProvince: (state) => {
            state.data = [];
        },
        setSelectedProvinces: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedProvince: (state) => {
            state.selected = "";
        },
    },
});

// Export the actions and reducer
export const {
    setProvinces,
    clearProvince,
    setSelectedProvinces,
    clearSelectedProvince,
} = provincesSlice.actions;
export default provincesSlice.reducer;
