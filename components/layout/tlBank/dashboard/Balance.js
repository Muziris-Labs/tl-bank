"use client";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNetwork } from "wagmi";

const Balance = () => {
  const balance = useSelector((state) => state.wallet.balance);
  const [totalBalance, setTotalBalance] = useState(0);
  const status = useSelector((state) => state.tlbank.status);
  const safeName = useSelector((state) => state.wallet.safeName);
  const { chain } = useNetwork();
  const safeAddress = useSelector((state) => state.wallet.safe);

  useEffect(() => {
    setTotalBalance(balance.reduce((a, b) => a + b, 0));
  }, [balance]);

  return (
    <div>
      <p
        className="text-sm  text-gray-500 hover:cursor-pointer"
        onClick={() => {
          window.open(
            `https://app.safe.global/transactions/queue?safe=${
              chain === 1 ? "eth:" : "gor:"
            }${safeAddress}`,
            "_blank",
          );
        }}
      >
        {status === "CON" ? "Contributor" : safeName}{" "}
        {status === "ORG" && (
          <ArrowTopRightOnSquareIcon className="mb-1 ml-1 inline-block h-4 w-4" />
        )}
      </p>

      <div className="flex items-end gap-4">
        <h2 className="mt-6 text-5xl font-semibold">
          ${totalBalance.toFixed(2)}
        </h2>

        {/* <span className="flex items-center gap-1 rounded-md bg-[#56c861]/20 p-1 text-sm font-normal text-[#56C861]">
          <ArrowUpIcon className="inline-block h-4 w-4" />
          3.4%
        </span> */}
      </div>
    </div>
  );
};

export default Balance;
