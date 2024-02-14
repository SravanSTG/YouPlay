import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChannelType } from "../interfaces";

const subscribedChannels: ChannelType[] = [];

const subscribeSlice = createSlice({
  name: "subscribe",
  initialState: {
    subscribedChannels: subscribedChannels,
  },
  reducers: {
    addChannel: (state, action: PayloadAction<ChannelType>) => {
      const exists = state.subscribedChannels.some((channel) => channel.id === action.payload.id);
      if (!exists) {
        state.subscribedChannels.push(action.payload);
      }
    },
    removeChannel: (state, action: PayloadAction<string>) => {
      state.subscribedChannels = state.subscribedChannels.filter((channel) => channel.id !== action.payload);
    },
  },
});

export const { addChannel, removeChannel } = subscribeSlice.actions;

export default subscribeSlice.reducer;
