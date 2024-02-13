import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VideoCardType } from "../interfaces";

const watchLaterVideos: VideoCardType[] = [];

const watchLaterSlice = createSlice({
  name: "watchLater",
  initialState: {
    watchLaterVideos: watchLaterVideos,
  },
  reducers: {
    addToWatchLater: (state, action: PayloadAction<VideoCardType>) => {
      const exists = state.watchLaterVideos.some((video) => video.id === action.payload.id);
      if (!exists) {
        state.watchLaterVideos.push(action.payload);
      }
    },
    removeFromWatchLater: (state, action: PayloadAction<string>) => {
      state.watchLaterVideos = state.watchLaterVideos.filter(
        (channel) => channel.id !== action.payload
      );
    },
  },
});

export const { addToWatchLater, removeFromWatchLater } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
