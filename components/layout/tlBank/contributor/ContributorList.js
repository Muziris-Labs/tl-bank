"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";

import useGetServer from "@/hooks/useGetServer";

import ContributorItem from "./ContributorItem";
import ContributorHeader from "./ContributorHeader";
import ContributorLoading from "./ContributorLoading";
import { AddContributorsToQueueBtn } from "@/components/ui/ClientButtons";

const ContributorList = () => {
  const { address } = useAccount();
  const { getAllContributors } = useGetServer();

  const [loading, setLoading] = useState(true);

  const signature = useSelector((state) => state.wallet.signature);
  const status = useSelector((state) => state.tlbank.status);
  const contributors = useSelector((state) => state.tlbank.contributors);

  useEffect(() => {
    if (signature && address && status === "ORG") {
      getAllContributors();
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature, address, status]);

  return (
    <>
      <section className="mt-10 w-full space-y-3 rounded-xl bg-gray-800/70 px-4 py-4">
        <ContributorHeader />

        {loading ? (
          <ContributorLoading />
        ) : (
          <div className="space-y-3">
            {contributors.length > 0 ? (
              contributors.map((contributor, index) => (
                <ContributorItem key={index} contributor={contributor} />
              ))
            ) : (
              <div className="flex w-full items-center justify-center rounded-md bg-gray-900/90 px-4 py-3">
                <p className="text-gray-400">No contributors found</p>
              </div>
            )}
          </div>
        )}
      </section>

      <AddContributorsToQueueBtn />
    </>
  );
};

export default ContributorList;
