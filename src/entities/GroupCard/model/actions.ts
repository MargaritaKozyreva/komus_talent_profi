import { GroupContext, TalentContext } from "@api/dataContext";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserGroupByUserId = createAsyncThunk(
  "userGroupSlice/getUserGroupByUserId",
  async (userId: string) => {
    const data = await GroupContext.getUserGroupByUserId({ userId });
    return data;
  }
);

export const getUserTalentsByUserId = createAsyncThunk(
  "userSlice/getUserTalents",
  async (userId: string) => {
    const data = await TalentContext.getUserTalents({ userId });
    return data;
  }
);
