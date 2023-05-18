import { createAsyncThunk } from "@reduxjs/toolkit";
import auth from "@/utils/auth";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    try {
      const responce = await auth.checkUser();
      return responce;
    } catch (error) {}
  }
);
