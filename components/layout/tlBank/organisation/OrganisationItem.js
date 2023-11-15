"use client";
import { setSafe, setSafeName } from "@/redux/slice/walletSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const OrganisationItem = ({ src, name, label, pubKey }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div
      className="mx-auto flex w-[46vw] max-w-2xl items-center justify-between gap-8 rounded-2xl border-2 border-gray-700 bg-gray-900/60 p-3 hover:cursor-pointer"
      onClick={() => {
        dispatch(setSafe(pubKey));
        dispatch(setSafeName(label));
        router.push("/tlBank/dashboard/");
      }}
    >
      <div className="flex w-44 items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
          <Image src={src} alt="BanklessDAO" width={24} height={24} />
        </div>

        <h3 className="text-base text-gray-400">{name}</h3>
      </div>

      <p className="w-48 overflow-hidden text-ellipsis whitespace-nowrap text-xl">
        {label}
      </p>

      <p className="text-pink  text-xl">
        {pubKey.toString().substring(0, 4) +
          "..." +
          pubKey
            .toString()
            .substring(pubKey.toString().length - 4, pubKey.toString().length)}
      </p>
    </div>
  );
};

export default OrganisationItem;
