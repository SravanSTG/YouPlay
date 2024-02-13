import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VideoCardType } from "../interfaces";

const likedVideos: VideoCardType[] = [];

const likedVideosSlice = createSlice({
  name: "likedVideos",
  initialState: {
    likedVideos: likedVideos,
  },
  reducers: {
    addToLikedVideos: (state, action: PayloadAction<VideoCardType>) => {
      const exists = state.likedVideos.some((video) => video.id === action.payload.id);
      if (!exists) {
        state.likedVideos.push(action.payload);
      }
    },
    removeFromLikedVideos: (state, action: PayloadAction<string>) => {
      state.likedVideos = state.likedVideos.filter((video) => video.id !== action.payload);
    }
  },
});

export const { addToLikedVideos, removeFromLikedVideos } = likedVideosSlice.actions;

export default likedVideosSlice.reducer;
