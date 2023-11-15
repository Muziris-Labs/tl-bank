"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import { useDispatch } from "react-redux";

import { handleTransactionModal } from "@/redux/slice/modalSlice";
import { handleSelectedTransaction } from "@/redux/slice/selectedSlice";

const TransactionItem = ({ contributor }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleSelectedTransaction(contributor));
    dispatch(handleTransactionModal());
  };

  return (
    <div
      className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3"
      onClick={handleClick}
    >
      <div className="flex w-2/12 items-center gap-2 text-left text-gray-400">
        <div className=" w-fit  rounded-md bg-[#00B728]/10 p-3">
          <PaperAirplaneIcon className="h-5 w-5 -translate-y-0.5 translate-x-px -rotate-45 text-[#00B728]" />
        </div>
        {contributor.status}
      </div>

      <div
        className="hidden w-2/12 overflow-hidden whitespace-nowrap md:block"
        style={{ textOverflow: "ellipsis" }}
      >
        {contributor.price}
      </div>

      <div
        className="w-2/12 overflow-hidden whitespace-nowrap"
        style={{ textOverflow: "ellipsis" }}
      >
        {contributor.contributor}
      </div>

      <div className="hidden max-w-[90px] text-right md:block">
        {new Date(Number(contributor.date)).toLocaleString()}
      </div>
    </div>
  );
};

export default TransactionItem;
