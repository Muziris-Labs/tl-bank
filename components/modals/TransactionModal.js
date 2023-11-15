"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";

import TransactionBody from "./transaction/TransactionBody";
import TransactionFooter from "./transaction/TransactionFooter";
import { handleTransactionModal } from "@/redux/slice/modalSlice";

const TransactionModal = () => {
  const isOpen = useSelector((state) => state.modal.transactionModal);
  const transaction = useSelector(
    (state) => state.selected.selectedTransaction,
  );

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(handleTransactionModal());
  };

  return (
    transaction && (
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

        <DialogBody className="space-y-6 px-10 font-grotesque">
          <TransactionBody transaction={transaction} />
        </DialogBody>

        <DialogFooter className="mt-4 justify-center font-grotesque">
          <TransactionFooter transaction={transaction} />
        </DialogFooter>
      </Dialog>
    )
  );
};

export default TransactionModal;
