import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
    data: [],
    selected: "",
};

// Create a slice of the Redux store
const kecamatanSlice = createSlice({
    name: "KECAMATAN",
    initialState,
    reducers: {
        setKecamatan: (state, action) => {
            state.data = action.payload;
        },
        clearKecamatan: (state) => {
            state.data = [];
        },
        setSelectedKecamatan: (state, action) => {
            state.selected = action.payload;
        },
        clearSelectedKecamatan: (state) => {
            state.selected = "";
        },
    },
});

// Export the actions and reducer
export const {
    setKecamatan,
    clearKecamatan,
    setSelectedKecamatan,
    clearSelectedKecamatan,
} = kecamatanSlice.actions;
export default kecamatanSlice.reducer;
