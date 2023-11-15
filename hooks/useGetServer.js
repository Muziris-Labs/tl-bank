"use client";
import { setContributors, setTransactions } from "@/redux/slice/tlbankSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useAccount } from "wagmi";

export default function useGetServer() {
  const selectedSafe = useSelector((state) => state.wallet.safe);
  const { address } = useAccount();
  const signature = useSelector((state) => state.wallet.signature);
  const dispatch = useDispatch();

  const getAllContributors = async () => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/contributors/${selectedSafe}/all`,
        { headers },
      );

      dispatch(setContributors(res.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const getAllTransactions = async (inputAddress) => {
    try {
      const headers = {
        "x-auth-sig": signature,
        "x-auth-pubkey": address,
      };

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/transactions/${inputAddress}/all`,
        { headers },
      );
      dispatch(setTransactions(res.data));
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return { getAllContributors, getAllTransactions };
}
