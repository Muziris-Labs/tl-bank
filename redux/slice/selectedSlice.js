import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTransaction: null,
  selectedContributors: [],
  walletAddress: "",
  executedTransaction: null,
};

export const selectedSlice = createSlice({
  name: "selected",
  initialState,

  reducers: {
    handleSelectedTransaction: (state, action) => {
      state.selectedTransaction = action.payload;
    },

    addSelectedContributor: (state, action) => {
      state.selectedContributors.push(action.payload);
    },

    removeSelectedContributor: (state, action) => {
      state.selectedContributors = state.selectedContributors.filter(
        (contributor) => contributor.id !== action.payload.id,
      );
    },

    clearSelectedContributors: (state) => {
      state.selectedContributors = [];
    },

    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },

    setExecutedTransaction: (state, action) => {
      state.executedTransaction = action.payload;
    },
  },
});

export const {
  handleSelectedTransaction,
  addSelectedContributor,
  removeSelectedContributor,
  clearSelectedContributors,
  setWalletAddress,
  setExecutedTransaction,
} = selectedSlice.actions;
