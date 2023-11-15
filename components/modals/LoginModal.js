"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import {
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";

import { handleLoginModal, setActiveWallet } from "@/redux/slice/modalSlice";
import WalletList from "./login/WalletList";
import SelectedWallet from "./login/SelectedWallet";
import { useAccount, useConnect } from "wagmi";

const LoginModal = () => {
  const activeWallet = useSelector((state) => state.modal.activeWallet);
  const isOpen = useSelector((state) => state.modal.loginModal);
  const dispatch = useDispatch();
  const { connector, isConnected } = useAccount();

  const handleOpen = () => {
    dispatch(handleLoginModal());
    if (isConnected) return;
    dispatch(setActiveWallet(null));
  };

  useEffect(() => {
    if (isConnected) {
      dispatch(setActiveWallet(connector.name));
    }
  }, [isConnected, connector, dispatch]);

  return (
    <Dialog
      id="content"
      size="md"
      open={isOpen}
      handler={handleOpen}
      className="!z-0 flex bg-gray-900"
      aria-hidden={isOpen}
    >
      <section className="w-2/5 border-r border-gray-700 font-grotesque">
        <DialogHeader className="flex items-center gap-2">
          <Image
            src="/logo-white.svg"
            alt="Bankless Logo"
            width={28}
            height={28}
          />

          <p className="text-xl font-medium text-white">Connect</p>
        </DialogHeader>

        <DialogBody className="my-5 !px-2 font-grotesque">
          <WalletList />
        </DialogBody>

        <DialogFooter className="justify-start border-t border-gray-700 font-normal">
          <Link href="#" className="prevent-select flex text-sm text-[#FCADFF]">
            Connect Hardware Wallet
            <ArrowTopRightOnSquareIcon className="ml-1 h-5 w-5" />
          </Link>
        </DialogFooter>
      </section>

      <section className="flex w-3/5 flex-col justify-between font-grotesque">
        <DialogHeader className="flex items-center">
          <h3 className="ml-6 w-full text-center text-xl font-bold text-white">
            Sign In
          </h3>

          <IconButton size="sm" variant="text" onClick={handleOpen}>
            <XMarkIcon className="h-6 w-6 text-white" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="border-white !px-5 font-grotesque">
          <SelectedWallet activeWallet={activeWallet} />
        </DialogBody>

        <DialogFooter className="justify-center">
          <p className="w-4/5 text-center text-sm font-normal text-gray-500">
            By connecting, you agree to the Terms of Service and Privacy Policy
          </p>
        </DialogFooter>
      </section>
    </Dialog>
  );
};

export default LoginModal;
