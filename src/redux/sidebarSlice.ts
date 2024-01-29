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
    closeSidebarMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleSidebarMenu, closeSidebarMenu } = sidebarSlice.actions;

export default sidebarSlice.reducer;
