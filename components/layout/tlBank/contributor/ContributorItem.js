"use client";

import {
  TrashIcon,
  PencilSquareIcon,
  PaperAirplaneIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

import usePostServer from "@/hooks/usePostServer";

import {
  removeContributor,
  updateContributor as update,
} from "@/redux/slice/tlbankSlice";
import { setWalletAddress } from "@/redux/slice/selectedSlice";

import ContributorCheckbox from "./ContributorCheckbox";

const ContributorItem = ({ contributor }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [text, setText] = useState(contributor.name);
  const [isEditing, setIsEditing] = useState(false);

  const { deleteContributor, updateContributor } = usePostServer();

  const handleDeleteContributor = async () => {
    const res = await deleteContributor(contributor.pubkey);
    if (!res) return;
    dispatch(removeContributor(contributor.pubkey));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = async () => {
    setIsEditing(false);
    const res = await updateContributor(contributor.pubkey, text);
    if (!res) return;
    dispatch(
      update({
        pubkey: contributor.pubkey,
        name: text,
      }),
    );
  };

  return (
    <div className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3">
      <ContributorCheckbox
        contributor={contributor}
        text={text}
        setText={setText}
        isEditing={isEditing}
        handleDoubleClick={handleDoubleClick}
        handleBlur={handleBlur}
      />

      <p className="w-28 text-[#FCADFF]">{contributor.pubkey}</p>

      <button
        className="rounded-md bg-black/40 p-2"
        onClick={() => {
          dispatch(setWalletAddress(contributor.pubkey));
          router.push("/dashboard");
        }}
      >
        <PaperAirplaneIcon className="h-5 w-5 text-[#FCADFF]" />
      </button>

      <div className="flex space-x-3">
        <button onClick={handleDeleteContributor}>
          <TrashIcon className="h-5 w-5 text-gray-300" />
        </button>

        {isEditing ? (
          <button onClick={handleBlur}>
            <CheckIcon className="h-5 w-5 text-gray-300" />
          </button>
        ) : (
          <button onClick={handleDoubleClick}>
            <PencilSquareIcon className="h-5 w-5 text-gray-300" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContributorItem;
