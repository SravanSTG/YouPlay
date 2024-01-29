import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
