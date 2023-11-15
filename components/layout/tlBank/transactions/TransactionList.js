"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

import useGetServer from "@/hooks/useGetServer";

import TransactionItem from "./TransactionItem";
import TransactionHeader from "./TransactionHeader";
import TransactionLoading from "./TransactionLoading";

const TransactionList = () => {
  const { address } = useAccount();
  const { getAllTransactions } = useGetServer();

  const [loading, setLoading] = useState(true);

  const transactions = useSelector((state) => state.tlbank.transactions);
  const safeAddress = useSelector((state) => state.wallet.safe);
  const status = useSelector((state) => state.tlbank.status);

  useEffect(() => {
    if (status === "CON") {
      if (!address) return;

      getAllTransactions(address);
      setLoading(false);
    } else {
      if (!safeAddress) return;

      getAllTransactions(safeAddress);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, safeAddress, status]);

  return (
    <section className="mt-10 w-full max-w-6xl space-y-3 rounded-xl bg-gray-800/70 px-4 py-4">
      <TransactionHeader />

      {loading ? (
        <TransactionLoading />
      ) : (
        <div className="space-y-3">
          {transactions.length > 0 ? (
            transactions.map((contributor, index) => (
              <TransactionItem key={index} contributor={contributor} />
            ))
          ) : (
            <div className="flex w-full items-center justify-center rounded-md bg-gray-900/90 px-4 py-3">
              <p className="text-gray-400">No Transaction found</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default TransactionList;
