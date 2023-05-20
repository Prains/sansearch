import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchingZone: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchingZone: (state, action) => {
      state.searchingZone = action.payload;
    },
  },
});

export const { setSearchingZone } = uiSlice.actions;
export default uiSlice.reducer;
