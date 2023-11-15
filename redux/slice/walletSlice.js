import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signature: null,
  safe: "0xf93d09fA1847Ef7606eAA52E26F66ea0Ab89181D",
  balance: [0, 0, 0],
  safeName: "Testnet Treasury",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setSignature: (state, action) => {
      state.signature = action.payload;
    },
    setSafe: (state, action) => {
      state.safe = action.payload;
    },
    setBalance: (state, action) => {
      state.balance[action.payload.index] = action.payload.value;
    },
    setSafeName: (state, action) => {
      state.safeName = action.payload;
    },
  },
});

export const { setSignature, setSafe, setBalance, setSafeName } =
  walletSlice.actions;
