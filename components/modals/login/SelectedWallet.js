import Image from "next/image";
import ConnectSignBtn from "./ConnectSignBtn";
import { useSelector } from "react-redux";

const SelectedWallet = () => {
  const activeWallet = useSelector((state) => state.modal.activeWallet);
  const name =
    activeWallet === "MetaMask"
      ? "metamask"
      : activeWallet === "Coinbase Wallet"
      ? "coinbase"
      : "walletconnect";
  const bg =
    activeWallet === "MetaMask"
      ? "bg-[#ffe6ce]"
      : activeWallet === "Coinbase Wallet"
      ? "bg-[#0052FF]"
      : "bg-wallet-gradient";

  return (
    <div className="flex flex-col items-center space-y-8">
      {activeWallet ? (
        <>
          <div
            className={`prevent-select overflow-hidden rounded-lg p-3 ${bg}`}
          >
            <Image
              src={`/images/modal/login/${name}.svg`}
              alt={activeWallet + " Logo"}
              width={48}
              height={48}
            />
          </div>

          <ConnectSignBtn name={activeWallet} />
        </>
      ) : (
        <>
          <div
            className={`prevent-select overflow-hidden rounded-lg bg-black p-3`}
          >
            <Image
              src={`/logo.svg`}
              alt={"Bankless Wallet Logo"}
              width={48}
              height={48}
            />
          </div>

          <div className="text-center">
            <p className="text-lg text-white">
              Welcome to the Bankless Wallet.
            </p>
            <p className="text-gray-500">Please select a wallet to connect.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedWallet;
