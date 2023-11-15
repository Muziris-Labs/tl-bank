"use client";

import { useAccount } from "wagmi";

const Pubkey = () => {
  const { address } = useAccount();
  const handlePubKeyClick = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <p
      className="rounded-full bg-[#292929] px-3 py-1 text-base font-medium"
      onClick={handlePubKeyClick}
    >
      {address.slice(0, 6)}...{address.slice(-4)}
    </p>
  );
};

export default Pubkey;
