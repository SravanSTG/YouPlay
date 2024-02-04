import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchQuery: "",
  },
  reducers: {
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
