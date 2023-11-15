"use client";

import Image from "next/image";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";

import { setActiveWallet } from "@/redux/slice/modalSlice";

const WalletItem = ({ bg, src, name }) => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();
  const handleClick = () => {
    if (isConnected) return;
    dispatch(setActiveWallet(name));
  };

  return (
    <li
      className={`prevent-select flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-800 ${
        isConnected && "cursor-default opacity-50 hover:bg-transparent"
      }`}
      onClick={handleClick}
    >
      <div className={`overflow-hidden rounded-lg p-3 ${bg}`}>
        <Image
          src={`/images/modal/login/${src}`}
          alt={name + " Logo"}
          width={32}
          height={32}
        />
      </div>

      <p className="font-medium text-white">{name}</p>
    </li>
  );
};

export default WalletItem;
