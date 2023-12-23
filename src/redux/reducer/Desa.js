import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    data: [],
    selected: "",
};

// Create a slice of the Redux store
const desaSlice = createSlice({
    name: "DESA",
    initialState,
    reducers: {
        setDesa: (state, action) => {
            state.data = action.payload;
        },
        clearDesa: (state) => {
            state.data = [];
        },
        setSelectedDesa: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedDesa: (state) => {
            state.selected = "";
        },
    },
});

// Export the actions and reducer
export const { setDesa, clearDesa, setSelectedDesa, clearSelectedDesa } =
    desaSlice.actions;
export default desaSlice.reducer;
