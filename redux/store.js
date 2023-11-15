"use client";

import { configureStore } from "@reduxjs/toolkit";

import { modalSlice } from "@/redux/slice/modalSlice";
import { walletSlice } from "@/redux/slice/walletSlice";
import { tlbankSlice } from "@/redux/slice/tlbankSlice";
import { selectedSlice } from "./slice/selectedSlice";
import { userSlice } from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    wallet: walletSlice.reducer,
    tlbank: tlbankSlice.reducer,
    user: userSlice.reducer,
    selected: selectedSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
