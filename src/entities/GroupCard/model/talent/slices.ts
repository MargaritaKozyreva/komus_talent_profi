import { UserTalentType } from "@api/types";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { getUserTalentsByUserId } from '../actions';

export type UserTalentState = {
  entity: UserTalentType | null;
  isLoading: boolean;
  error: string | SerializedError | undefined;
};

const initialState: UserTalentState = {
  entity: null,
  isLoading: false,
  error: undefined,
};

const userTalentSlices = createSlice({
  name: "userTalentSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserTalentsByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserTalentsByUserId.fulfilled, (state, action) => {
      state.entity = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getUserTalentsByUserId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userTalentActions = userTalentSlices.actions;
export const userTalentReducers = userTalentSlices.reducer;
