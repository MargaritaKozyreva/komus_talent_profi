import { RateContext } from '@api/dataContext';
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserRateByUserId = createAsyncThunk(
  "userRateSlice/getUserRateByUserId",
  async (userId: string) => {
    const data = await RateContext.getUserRateByUserId({userId});
    return data;
  }
);
