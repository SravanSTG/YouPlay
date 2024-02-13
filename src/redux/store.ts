import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import subscribeSlice from "./subscribeSlice";
import watchLaterSlice from "./watchLaterSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    search: searchSlice,
    subscribe: subscribeSlice,
    watchLater: watchLaterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
