import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchingZone: "",
  documents: [],
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchingZone: (state, action) => {
      state.searchingZone = action.payload;
    },
    setDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
});

export const { setSearchingZone, setDocuments } = uiSlice.actions;
export default uiSlice.reducer;
