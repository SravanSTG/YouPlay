import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSidebarMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleSidebarMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
