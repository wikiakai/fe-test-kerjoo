import { configureStore } from "@reduxjs/toolkit";
import provincesReducer from "../reducer/Province";
import kabupatenReducer from "../reducer/Kabupaten";
import kecamatanReducer from "../reducer/Kecamatan";
import desaReducer from "../reducer/Desa";

// Combine reducers if you have more than one
const rootReducer = {
    PROVINCES: provincesReducer,
    KABUPATEN: kabupatenReducer,
    KECAMATAN: kecamatanReducer,
    DESA: desaReducer,
    // otherReducers: ...,
};

// Create the Redux store
export const store = configureStore({
    reducer: rootReducer,
});
