import { ArticleType, GroupType, RateType } from "@api/types";
import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { getArticleById, getArticles } from './actions';

export type ArticleState = {
  entity: ArticleType | null;
  isLoading: boolean;
  error: string | SerializedError | undefined;
};

// const initialState: ArticleState = {
//   entity: null,
//   isLoading: false,
//   error: undefined,
// };

// const ArticleSlices = createSlice({
//   name: "ArticleSlice",
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(getArticleById.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(getArticleById.fulfilled, (state, action) => {
//       state.entity = action.payload.data;
//       state.isLoading = false;
//     });
//     builder.addCase(getArticleById.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });
//   },
// });

// export const ArticleActions = ArticleSlices.actions;
// export const ArticleReducers = ArticleSlices.reducer;
