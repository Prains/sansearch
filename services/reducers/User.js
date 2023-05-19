import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    status: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [fetchCurrentUser.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
