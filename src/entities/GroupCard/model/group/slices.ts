import { GroupType } from "@api/types";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { getUserGroupByUserId } from '../actions';


export type UserGroupState = {
  entity: GroupType | null;
  isLoading: boolean;
  error: string | SerializedError | undefined;
};

const initialState: UserGroupState = {
  entity: null,
  isLoading: false,
  error: undefined,
};

const userGroupSlices = createSlice({
  name: "userGroupSlice",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserGroupByUserId.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserGroupByUserId.fulfilled, (state, action) => {
      state.entity = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getUserGroupByUserId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const userGroupActions = userGroupSlices.actions;
export const userGroupReducers = userGroupSlices.reducer;
