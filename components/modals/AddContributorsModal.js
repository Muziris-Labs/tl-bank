"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { AddContributorQueueBtn } from "../ui/ClientButtons";
import AddContributorsItem from "./addContributors/AddContributorsItem";
import { addToQueue } from "@/redux/slice/tlbankSlice";
import { handleAddContributorsModal } from "@/redux/slice/modalSlice";

const AddContributorsModal = () => {
  const router = useRouter();

  const [contributors, setContributors] = useState([]);
  const isOpen = useSelector((state) => state.modal.addContributorsModal);
  const selectedContributors = useSelector(
    (state) => state.selected.selectedContributors,
  );

  const dispatch = useDispatch();

  const getDateAfterSixMonths = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 6);

    return date.getTime();
  };

  const handleAmountChange = (pubKey, amount) => {
    setContributors((prevContributors) => {
      const newContributors = [...prevContributors];
      const index = newContributors.findIndex((c) => c.pubKey === pubKey);

      if (index !== -1) {
        newContributors[index].amount = amount;
      } else {
        newContributors.push({ pubKey, amount, time: getDateAfterSixMonths() });
      }

      return newContributors;
    });
  };

  const handleOpen = () => {
    dispatch(handleAddContributorsModal());
  };

  const handleClick = () => {
    router.push("/dashboard");

    contributors.map((contributor) => {
      dispatch(addToQueue(contributor));
    });

    dispatch(handleAddContributorsModal());
  };

  return (
    <Dialog
      id="content"
      size="sm"
      open={isOpen}
      handler={handleOpen}
      className="bg-gray-900"
      aria-hidden={isOpen}
    >
      <DialogHeader className="flex items-center font-grotesque">
        <h3 className="ml-6 w-full text-xl font-bold text-white">
          Add to Queue
        </h3>

        <IconButton size="sm" variant="text" onClick={handleOpen}>
          <XMarkIcon className="h-6 w-6 text-white" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="max-h-80 space-y-4 overflow-y-auto px-10 font-grotesque">
        {selectedContributors.map((selectedContributor, index) => (
          <AddContributorsItem
            key={index}
            selectedContributor={selectedContributor}
            onAmountChange={handleAmountChange}
          />
        ))}
      </DialogBody>

      <DialogFooter className="justify-end px-10">
        <AddContributorQueueBtn onClick={handleClick} />
      </DialogFooter>
    </Dialog>
  );
};

export default AddContributorsModal;
