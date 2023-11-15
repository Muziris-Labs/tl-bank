"use client";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";
import {
  addContributor as add,
  addTransaction as addTx,
} from "@/redux/slice/tlbankSlice";

export default function usePostServer() {
  const selectedSafe = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);
  const dispatch = useDispatch();

  const addContributor = async (name, contributorPubkey) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        name,
        contributorPubkey,
        safeAddress: selectedSafe,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/add`,
        body,
        { headers },
      );

      dispatch(add(res.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const deleteContributor = async (contributorPubkey) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        safeAddress: selectedSafe,
      };

      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/delete/${contributorPubkey}`,
        { headers, data: body },
      );

      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const updateContributor = async (contributorPubkey, name) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        name,
        safeAddress: selectedSafe,
      };

      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/update/${contributorPubkey}`,
        body,
        { headers },
      );

      console.log(res.data);

      return res.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const addTransaction = async (status, price, contributor, sender, role) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const body = {
        status,
        price,
        contributor,
        sender,
        role,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions/add`,
        body,
        { headers },
      );

      dispatch(addTx(res.data));

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return {
    addContributor,
    deleteContributor,
    updateContributor,
    addTransaction,
  };
}
