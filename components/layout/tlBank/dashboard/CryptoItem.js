"use client";
import { setBalance } from "@/redux/slice/walletSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const CryptoItem = ({ src, amount, crypto, id, index }) => {
  const [dollars, setDollars] = useState(0);
  const dispatch = useDispatch();

  const fetchDollarBalance = async (name) => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${name}&vs_currencies=usd`,
    );
    const data = await response.json();
    return data[name]["usd"];
  };

  useEffect(() => {
    if (!id) return;
    fetchDollarBalance(id).then((data) => {
      setDollars((data * amount.formatted).toFixed(2));
      dispatch(setBalance({ index, value: data * amount.formatted }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount, id]);

  return (
    <div className="flex w-48 min-w-[192px] items-start gap-3 rounded-md bg-gray-900 p-3">
      <div className="h-6 w-6 rounded-full bg-white">
        <Image
          src={`/images/home/coins/${src}.svg`}
          alt={src}
          width={24}
          height={24}
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-base font-semibold">
          {Number(amount?.formatted).toFixed(2) + " " + crypto}
        </h3>
        <span className="text-offwhite text-sm">{"$" + dollars}</span>
      </div>
    </div>
  );
};

export default CryptoItem;
