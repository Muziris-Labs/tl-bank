"use client";

import { useAccount } from "wagmi";

import { ConnectWalletBtn, SignWalletBtn } from "@/components/ui/ClientButtons";

const ConnectSignBtn = ({ name }) => {
  const { isConnected } = useAccount();

  return (
    <div className="space-y-2 px-5 text-center font-normal">
      {!isConnected ? (
        <p className="px-4">Please connect your {name} to continue.</p>
      ) : (
        <p className="px-4">
          Please sign the message request in your wallet to continue.
        </p>
      )}

      {isConnected ? <SignWalletBtn /> : <ConnectWalletBtn />}
    </div>
  );
};

export default ConnectSignBtn;
