"use client";

import { Tooltip } from "@material-tailwind/react";

import { useDispatch } from "react-redux";
import { removeFromQueue } from "@/redux/slice/tlbankSlice";

const TransactionItem = ({ amount, time, pubKey }) => {
  const dispatch = useDispatch();

  const convertDate = (inputDate) => {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  time = convertDate(time);

  return (
    <Tooltip
      content="Click to delete transaction"
      className="bg-gradient-primary font-grotesque"
      animate={{
        mount: { scale: 1, y: -2 },
        unmount: { scale: 0, y: 18 },
      }}
    >
      <div
        className="prevent-select flex cursor-pointer justify-between rounded-md bg-black/80 p-3 text-lg transition-colors hover:bg-gray-800"
        onClick={() => {
          dispatch(removeFromQueue(pubKey));
        }}
      >
        <div className="flex items-center gap-3 font-semibold">
          <p
            className="w-24 overflow-hidden whitespace-nowrap text-gray-500"
            style={{ textOverflow: "ellipsis" }}
          >
            {amount + " BANK"}
          </p>
        </div>

        <p>{pubKey.slice(0, 4) + "..." + pubKey.slice(-4)}</p>
        <p>{time}</p>
      </div>
    </Tooltip>
  );
};

export default TransactionItem;
