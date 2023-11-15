"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import { SelectRoleBtn } from "../ui/ClientButtons";
import { setStatus } from "@/redux/slice/tlbankSlice";
import { handleRoleModal } from "@/redux/slice/modalSlice";
import RoleList from "./role/RoleList";

const RoleModal = () => {
  const isOpen = useSelector((state) => state.modal.roleModal);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(2);
  const router = useRouter();

  const selectStatus = () => {
    if (selected === 0) return;

    if (selected === 1) {
      dispatch(setStatus("ORG"));
      router.push("/organisations");
    } else {
      dispatch(setStatus("CON"));
      router.push("/dashboard");
    }

    dispatch(handleRoleModal());
  };

  return (
    <Dialog
      id="content"
      size="sm"
      open={isOpen}
      className="bg-gray-900"
      aria-hidden={isOpen}
    >
      <DialogHeader className="flex items-center">
        <h3 className="ml-6 w-full font-grotesque text-xl font-semibold text-white">
          Select your role to proceed
        </h3>

        <IconButton size="sm" variant="text" className="cursor-default">
          <XMarkIcon className="hidden h-6 w-6 text-white" />
        </IconButton>
      </DialogHeader>

      <DialogBody className="space-y-4 px-10">
        <RoleList selected={selected} setSelected={setSelected} />
      </DialogBody>

      <DialogFooter className="justify-end px-10">
        <SelectRoleBtn handleClick={selectStatus} />
      </DialogFooter>
    </Dialog>
  );
};

export default RoleModal;
