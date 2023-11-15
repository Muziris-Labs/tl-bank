"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import {
  ArrowTopRightOnSquareIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";

import { handleTxCompleteModal } from "@/redux/slice/modalSlice";
import { useNetwork } from "wagmi";

const TxCompleteModal = () => {
  const isOpen = useSelector((state) => state.modal.txCompleteModal);
  const dispatch = useDispatch();
  const transaction = useSelector(
    (state) => state.selected.executedTransaction,
  );
  const status = useSelector((state) => state.tlbank.status);
  const { chain } = useNetwork();
  const safeAddress = useSelector((state) => state.wallet.safe);

  const handleOpen = () => {
    dispatch(handleTxCompleteModal());
  };

  return (
    <Dialog
      id="content"
      size="sm"
      open={isOpen}
      handler={handleOpen}
      className="bg-black"
      aria-hidden={isOpen}
    >
      <DialogHeader className="flex  items-center font-grotesque">
        <h3 className="ml-6 w-full text-xl font-bold text-white">
          Transaction
        </h3>

        <IconButton size="sm" variant="text" onClick={handleOpen}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="space-y-2 px-10 font-grotesque">
        <div className="space-y-2 text-center">
          <div className="mx-auto w-fit rounded-md bg-[#00B728]/10 p-3">
            <PaperAirplaneIcon className="h-5 w-5 -translate-y-0.5 translate-x-px -rotate-45 text-[#00B728]" />
          </div>

          <p className="text-gray-200">
            {transaction ? transaction.status : "Loading..."}
          </p>
        </div>

        <div className="space-y-1 text-center">
          <div
            className="mx-auto w-1/2 overflow-hidden text-4xl font-semibold text-white"
            style={{ textOverflow: "ellipsis" }}
          >
            {transaction ? transaction.price : "Loading..."}
          </div>
        </div>
      </DialogBody>

      <DialogFooter className="flex flex-col justify-center gap-2 pb-8 font-grotesque">
        <div className="text-base font-medium text-[#FCADFF]">
          {status === "ORG"
            ? "Collect All Signature to confirm the mint"
            : "Minting in progress"}
        </div>
        {status === "ORG" && (
          <div
            className="text-base font-medium text-[#51ff76] underline hover:cursor-pointer"
            onClick={() => {
              window.open(
                `https://app.safe.global/transactions/queue?safe=${
                  chain === 1 ? "eth:" : "gor:"
                }${safeAddress}`,
                "_blank",
              );
            }}
          >
            Go to your Safe{" "}
            <ArrowTopRightOnSquareIcon className="mb-1 ml-1 inline-block h-4 w-4 text-[#9ffcb3]" />
          </div>
        )}
      </DialogFooter>
    </Dialog>
  );
};

export default TxCompleteModal;
