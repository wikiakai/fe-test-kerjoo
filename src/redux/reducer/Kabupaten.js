import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    data: [],
    selected: "",
};

// Create a slice of the Redux store
const kabupatenSlice = createSlice({
    name: "KABUPATEN",
    initialState,
    reducers: {
        setKabp: (state, action) => {
            state.data = action.payload;
        },
        clearKabp: (state) => {
            state.data = [];
        },
        setSelectedKabp: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedKabp: (state) => {
            state.selected = "";
        },
    },
});

// Export the actions and reducer
export const { setKabp, clearKabp, setSelectedKabp, clearSelectedKabp } =
    kabupatenSlice.actions;
export default kabupatenSlice.reducer;
