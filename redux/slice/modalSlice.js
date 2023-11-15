import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginModal: false,
  contributorModal: false,
  roleModal: false,
  transactionModal: false,
  addContributorsModal: false,
  activeWallet: null,
  txCompleteModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,

  reducers: {
    handleLoginModal: (state) => {
      state.loginModal = !state.loginModal;
    },

    handleContributorModal: (state) => {
      state.contributorModal = !state.contributorModal;
    },

    handleAddContributorsModal: (state) => {
      state.addContributorsModal = !state.addContributorsModal;
    },

    handleRoleModal: (state) => {
      state.roleModal = !state.roleModal;
    },

    handleTransactionModal: (state) => {
      state.transactionModal = !state.transactionModal;
    },

    setActiveWallet: (state, action) => {
      state.activeWallet = action.payload;
    },

    handleTxCompleteModal: (state) => {
      state.txCompleteModal = !state.txCompleteModal;
    },
  },
});

export const {
  handleLoginModal,
  handleContributorModal,
  setActiveWallet,
  handleRoleModal,
  handleTransactionModal,
  handleAddContributorsModal,
  handleTxCompleteModal,
} = modalSlice.actions;
