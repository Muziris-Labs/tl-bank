import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributors: [],
  queue: [],
  transactions: [],
  status: "CON",
  SAFE_TRANSACTION_API: "https://safe-transaction-mainnet.safe.global",
  TLBANK: "0xeaEAb9f1B25fa00FC01a3fcE521b47E88527Aa02",
  BANK: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
  filteredOrganisations: [],
};

export const tlbankSlice = createSlice({
  name: "tlbank",
  initialState,

  reducers: {
    setContributors: (state, action) => {
      state.contributors = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    addContributor: (state, action) => {
      state.contributors.push(action.payload);
    },

    removeContributor: (state, action) => {
      state.contributors = state.contributors.filter(
        (c) => c.pubkey !== action.payload,
      );
    },

    updateContributor: (state, action) => {
      const index = state.contributors.findIndex(
        (c) => c.pubkey === action.payload.pubkey,
      );
      state.contributors[index].name = action.payload.name;
    },

    addToQueue: (state, action) => {
      state.queue.push(action.payload);
    },

    removeFromQueue: (state, action) => {
      state.queue = state.queue.filter((c) => {
        console.log(c, action.payload);
        return c.pubKey !== action.payload;
      });
    },

    emptyQueue: (state) => {
      state.queue = [];
    },

    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },

    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },

    setMainnet: (state) => {
      state.SAFE_TRANSACTION_API =
        "https://safe-transaction-mainnet.safe.global";
      state.TLBANK = "0xeaEAb9f1B25fa00FC01a3fcE521b47E88527Aa02";
      state.BANK = "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198";
    },

    setGoerli: (state) => {
      state.SAFE_TRANSACTION_API =
        "https://safe-transaction-goerli.safe.global";
      state.TLBANK = "0x8e6e3b92E4f1818bc7CEEE6B7B7228952aa41acb";
      state.BANK = "0x077154D2931eEC781f8F1a1D0a23Ce6Ef896a2ac";
    },

    setFilteredOrganisations: (state, action) => {
      state.filteredOrganisations = action.payload;
    },
  },
});

export const {
  setContributors,
  setStatus,
  addContributor,
  removeContributor,
  updateContributor,
  addToQueue,
  removeFromQueue,
  emptyQueue,
  setTransactions,
  addTransaction,
  setMainnet,
  setGoerli,
  setFilteredOrganisations,
} = tlbankSlice.actions;
