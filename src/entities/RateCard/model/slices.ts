import { GroupType, RateType } from "@api/types";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { getUserRateByUserId } from './actions';

export type UserRateState = {
  entity: RateType | null;
  isLoading: boolean;
  error: string | SerializedError | undefined;
};

const initialState: UserRateState = {
  entity: null,
  isLoading: false,
  error: undefined,
};

const UserRateSlices = createSlice({
  name: "UserRateSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserRateByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserRateByUserId.fulfilled, (state, action) => {
      state.entity = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getUserRateByUserId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userRateActions = UserRateSlices.actions;
export const userRateReducers = UserRateSlices.reducer;
