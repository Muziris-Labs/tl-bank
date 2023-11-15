"use client";

import {
  ArrowDownOnSquareIcon,
  ArrowUpRightIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@material-tailwind/react";

import { ethers } from "ethers";
import { useEffect } from "react";
import { saveAs } from "file-saver";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useAccount, useConnect, useSignMessage } from "wagmi";

import useSafe from "@/hooks/useSafe";
import useTLBank from "@/hooks/useTLBank";
import usePostServer from "@/hooks/usePostServer";

import {
  handleAddContributorsModal,
  handleContributorModal,
  handleLoginModal,
  handleRoleModal,
  handleTxCompleteModal,
} from "@/redux/slice/modalSlice";
import { setSignature } from "@/redux/slice/walletSlice";
import { setExecutedTransaction } from "@/redux/slice/selectedSlice";
import { emptyQueue } from "@/redux/slice/tlbankSlice";

const DefaultButton = ({
  variant,
  label,
  icon,
  style,
  color,
  onClick,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={`items-center gap-3 px-4 py-2 font-grotesque text-base font-normal capitalize sm:text-lg md:text-xl ${
        style ? style : "flex"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {icon === "" ? (
        ""
      ) : icon ? (
        icon
      ) : (
        <ArrowUpRightIcon className="h-5 w-5" />
      )}
    </Button>
  );
};

const TlBankLoginBtn = () => {
  const dispatch = useDispatch();
  const signature = useSelector((state) => state.wallet.signature);
  const { isConnected } = useAccount();

  const handleClick = () => {
    dispatch(handleLoginModal());
  };

  return (
    !signature && (
      <Button
        style={{
          background: "linear-gradient(180deg, #1E1E1E 0%, #141414 100%)",
        }}
        className="mt-10 flex cursor-pointer rounded-full border-2 border-gray-900 px-20 py-2 text-xl font-bold text-white"
        onClick={handleClick}
      >
        {isConnected ? "Sign Message" : "Login"}
      </Button>
    )
  );
};

const ConnectWalletBtn = () => {
  const activeWallet = useSelector((state) => state.modal.activeWallet);
  const dispatch = useDispatch();
  const handleClick = () => {
    connect({
      connector:
        connectors[
          activeWallet === "MetaMask"
            ? 0
            : activeWallet === "Coinbase Wallet"
            ? 1
            : 2
        ],
    });

    if (activeWallet === "WalletConnect") {
      dispatch(handleLoginModal());
    }
  };
  const { connect, connectors } = useConnect();

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Connect Wallet"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
    />
  );
};

const SignWalletBtn = () => {
  const { data, signMessage } = useSignMessage();
  const dispatch = useDispatch();
  const handleClick = () => {
    signMessage({ message: process.env.NEXT_PUBLIC_AUTH_MESSAGE });
  };

  useEffect(() => {
    if (data) {
      dispatch(handleLoginModal());
      dispatch(setSignature(data));
      dispatch(handleRoleModal());
    }
  }, [data, dispatch]);

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Sign In"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
    />
  );
};

const ContributorModalBtn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(handleContributorModal());
  };

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Add"
      icon={<PlusIcon className="h-5 w-5 text-white" />}
      style="flex bg-gradient-primary"
      onClick={handleClick}
    />
  );
};

const AddContributorBtn = ({ onClick }) => {
  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Add Contributor"
      icon={<PlusIcon className="h-5 w-5 text-white" />}
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={onClick}
    />
  );
};

const CreateTransactionBtn = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Create Transaction"
      style="flex bg-gradient-primary w-full justify-center"
      onClick={handleClick}
    />
  );
};

const AddToQueueBtn = ({ handleClick, disabled }) => {
  return (
    <DefaultButton
      variant="outlined"
      color="white"
      label="+ Add to Queue"
      style="flex w-full justify-center disabled:opacity-50"
      onClick={handleClick}
      icon=""
      disabled={disabled}
    />
  );
};

const PayContributorBtn = ({ handleClick }) => {
  const status = useSelector((state) => state.wallet.status);
  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label={"Pay " + (status === "CON" ? "Yourself" : "Contributor")}
      style="flex bg-gradient-primary w-full justify-center"
      onClick={handleClick}
    />
  );
};

const ExportTransactionBtn = () => {
  const transactions = useSelector((state) => state.tlbank.transactions);

  const handleClick = () => {
    if (transactions.length > 0) {
      const csv = transactions
        .map((transaction) => {
          const date = new Date(Number(transaction.date));
          const formattedDate = `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`;

          return [
            transaction.status,
            transaction.price,
            transaction.sender,
            formattedDate,
          ].join(",");
        })
        .join("\n");

      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      saveAs(blob, "transactions.csv");
    }
  };

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Export Transaction"
      style="flex bg-gradient-primary"
      icon={
        <ArrowDownOnSquareIcon className="h-5 w-5 text-sm text-white sm:text-sm md:text-base" />
      }
      onClick={handleClick}
    />
  );
};

const SelectRoleBtn = ({ handleClick }) => {
  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Select Role"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
      icon={<UserIcon className="h-5 w-5 text-white" />}
    />
  );
};

const ExecuteTransactionBtn = () => {
  const { createTLBank, allowwanceBank } = useTLBank();
  const { addTransaction } = usePostServer();
  const { executeSafeTransaction } = useSafe();

  const transactions = useSelector((state) => state.tlbank.queue);
  const tlBankAddress = useSelector((state) => state.tlbank.TLBANK);
  const bankAddress = useSelector((state) => state.tlbank.BANK);
  const safeAddress = useSelector((state) => state.wallet.safe);
  const dispatch = useDispatch();

  const handleClick = async () => {
    let txs = [];
    let tos = [];

    let totalAmount = 0;
    transactions.forEach((transaction) => {
      totalAmount += parseInt(transaction.amount);
    });

    const allowance = await allowwanceBank(totalAmount);

    txs.push(allowance.data);
    tos.push(bankAddress);

    transactions.forEach(async (transaction) => {
      const lockDate = (transaction.time.getTime() / 1000).toFixed(0);
      const amount = parseInt(transaction.amount);

      const unSignedTx = await createTLBank(
        transaction.pubKey,
        ethers.utils.parseEther(amount.toString()),
        lockDate,
      );

      txs.push(unSignedTx.data);
      tos.push(tlBankAddress);
    });

    try {
      await executeSafeTransaction(safeAddress, tos, txs);
      await addTransaction(
        "Queue Transfer",
        `${totalAmount} BANKS`,
        `${txs.length - 1} Contributors`,
        safeAddress,
        "Organisation",
      );
      dispatch(
        setExecutedTransaction({
          status: "Queue Transfer",
          price: `${totalAmount} BANKS`,
        }),
      );
      dispatch(handleTxCompleteModal());
      dispatch(emptyQueue());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Execute Transaction"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={handleClick}
    />
  );
};

const AddContributorQueueBtn = ({ onClick }) => {
  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Add to Queue"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={onClick}
    />
  );
};

const AddSelectedContributorsBtn = ({ onClick }) => {
  return (
    <DefaultButton
      variant={"filled"}
      color="gray"
      label="Add Contributors"
      style="flex bg-gradient-primary w-full justify-center text-sm sm:text-sm md:text-base"
      onClick={onClick}
    />
  );
};

const AddContributorsToQueueBtn = () => {
  const dispatch = useDispatch();
  const selectedContributors = useSelector(
    (state) => state.selected.selectedContributors,
  );

  const handleClick = () => {
    dispatch(handleAddContributorsModal());
  };

  return (
    <DefaultButton
      variant="filled"
      color="gray"
      label="+ Add to Queue"
      style="flex bg-gradient-primary disabled:opacity-50 ml-auto mt-4"
      onClick={handleClick}
      icon=""
      disabled={selectedContributors.length === 0}
    />
  );
};

export {
  ConnectWalletBtn,
  SignWalletBtn,
  DefaultButton,
  TlBankLoginBtn,
  ContributorModalBtn,
  AddContributorBtn,
  CreateTransactionBtn,
  AddToQueueBtn,
  PayContributorBtn,
  ExportTransactionBtn,
  SelectRoleBtn,
  ExecuteTransactionBtn,
  AddContributorQueueBtn,
  AddSelectedContributorsBtn,
  AddContributorsToQueueBtn,
};
