import { useEthersProvider } from "./utils/useEthersProvider";
import TLBankABI from "./utils/abi";
import BankABI from "./utils/tokenAbi";
import { useEthersSigner } from "./utils/useEthersSigner";
import { ethers } from "ethers";
import { useSelector } from "react-redux";

export default function useTLBank() {
  const provider = useEthersProvider();
  const signer = useEthersSigner();
  const tlBankAddress = useSelector((state) => state.tlbank.TLBANK);
  const bankAddress = useSelector((state) => state.tlbank.BANK);

  const createTLBank = async (recipient, amount, unlockDate) => {
    const TLBank = new ethers.Contract(tlBankAddress, TLBankABI, provider);

    const unsignedTx = await TLBank.populateTransaction.createNFT(
      recipient,
      amount,
      unlockDate,
    );

    return unsignedTx;
  };

  const lockAndLoadTLBank = async (id, amount, relockDate) => {
    const TLBank = new ethers.Contract(tlBankAddress, TLBankABI, provider);

    const unsignedTx = await TLBank.populateTransaction.locknLoadNFT(
      id,
      amount,
      relockDate,
    );

    return unsignedTx;
  };

  const redeemTLBank = async (id) => {
    const TLBank = new ethers.Contract(tlBankAddress, TLBankABI, provider);

    const unsignedTx = await TLBank.populateTransaction.redeemNFT(id);

    return unsignedTx;
  };

  const allowwanceBank = async (amount) => {
    const Bank = new ethers.Contract(bankAddress, BankABI, provider);

    const unsignedTx = await Bank.populateTransaction.approve(
      tlBankAddress,
      ethers.utils.parseEther(amount.toString()),
    );

    return unsignedTx;
  };

  const executeTransaction = async (unsignedTx, address) => {
    try {
      const tx = {
        to: address,
        value: 0,
        data: unsignedTx.data,
        gasLimit: 1000000,
      };

      const txHash = await signer.sendTransaction(tx);
      return txHash;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return {
    createTLBank,
    lockAndLoadTLBank,
    redeemTLBank,
    executeTransaction,
    allowwanceBank,
  };
}
