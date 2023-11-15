"use client";
import { useAccount, useNetwork } from "wagmi";
import OrganisationItem from "./OrganisationItem";
import { useEffect, useState } from "react";
import useSafe from "@/hooks/useSafe";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredOrganisations } from "@/redux/slice/tlbankSlice";

const OrganisationList = () => {
  const { address } = useAccount();
  const filteredOrganisations = useSelector(
    (state) => state.tlbank.filteredOrganisations,
  );
  const dispatch = useDispatch();
  const { getAllSafes } = useSafe();
  const SAFE_TRANSACTION_API = useSelector(
    (state) => state.tlbank.SAFE_TRANSACTION_API,
  );

  const organisations = [
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Analytics Guild Multisig",
      pubKey: "0x28861eeec6ab073A36Cc299ef8186978893e21FF",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "AV Guild Multisig",
      pubKey: "0xE2D721c126150BeEE3C56A1AD71A2E0E29A411F0",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless Academy EOA",
      pubKey: "0xe1887ff140bfa9d3b45d0b2077b7471124acd242",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Grants Committee Multisig",
      pubKey: "0x12BD9048b419838e25046040Dcd297aB16850280",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless DAO Treasury",
      pubKey: "0x31016FFCEBFf16C20E74A8610f1650DCB5c01Df3",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bankless Academy Multisig - Mainnet",
      pubKey: "0xf80Cd14ec747b2AdF7B1A9911b38c65a885dAeeA",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "BanklessDAO Multisig - Ethereum",
      pubKey: "0xf26d1Bb347a59F6C283C53156519cC1B1ABacA51",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Book Club Multisig",
      pubKey: "0x6CE58155605636286DA7CFB7161816f04a398cA8",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Bounty Board Multisig",
      pubKey: "0x8a3dAE25C39B114a0B86E4e7900cB3C29BD8F637",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Crypto Mentors Multisig",
      pubKey: "0xCA27C5813c314586434512ab139Cad96F6b71750",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "DAOlationships Multi-sig",
      pubKey: "0xb40f4ce59dA4A0B6D10aE605E10FD4E6ca9Ed4Ae",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Decentralized Law Multi-sig",
      pubKey: "0xF0b8eE46b30B5846dD1A8F0784Ecc3d660EDd179",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Dev Guild Multisig",
      pubKey: "0x623a12CA60D378705fd170A47b6d32C74367501D",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Education Department Multisig",
      pubKey: "0x4f285257849B840ADc1e293F735cb1F31e5cF026",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Legal Guild Multisig",
      pubKey: "0x984eC14dc726B75cA3eb6A94C64D165D37EA823e",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Marketing Guild Multisig",
      pubKey: "0xE5a64FC0d3396D11EB63d728791577E254Ac18Ca",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Newsletter Team Multi-sig",
      pubKey: "0xfedCBA83379eb70E94C28D3837fE2f70E8284D12",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Operations Guild Multisig",
      pubKey: "0x47F238eF7F6B9e4f8452d77228B101f7c0419733",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Project Management Guild Multisig",
      pubKey: "0xc7C712e02b3d99564ae830ceC33E5c3Ef45d0C8e",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Research Guild Multi-sig",
      pubKey: "0x2b00Fdf9AadAFEe22Cf56eb59BA367f6aCD0ce10",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Translators Guild Multisig",
      pubKey: "0x045a805c83c1D4C9E5a0bdcC5a27EFa73D2a3c0b",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Writers Guild Multisig",
      pubKey: "0xe7636c7ef670a3Bcf772D9d57244c9e88aD90437",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Dummy Safe",
      pubKey: "0x1dBA01d7519f3CD18cBdF2B207CC3D261eEadeF3",
    },
    {
      src: "/images/tlbank/org/gnosis-safe.svg",
      name: "Gnosis Safe",
      label: "Testnet Safe",
      pubKey: "0xf93d09fA1847Ef7606eAA52E26F66ea0Ab89181D",
    },
  ];

  useEffect(() => {
    if (!address) return;
    const getOrganisations = async () => {
      const safes = await getAllSafes(address);

      const filtered = organisations.filter((org) =>
        safes.find((safe) => safe === org.pubKey),
      );

      dispatch(setFilteredOrganisations(filtered));
    };
    getOrganisations();
  }, [address, SAFE_TRANSACTION_API]);

  return (
    <div className="mt-20 flex w-full flex-col gap-6">
      {filteredOrganisations.length > 0 ? (
        filteredOrganisations.map((organisation) => (
          <OrganisationItem
            key={organisation.name}
            src={organisation.src}
            name={organisation.name}
            label={organisation.label}
            pubKey={organisation.pubKey}
          />
        ))
      ) : (
        <div className="w-full text-center">
          <p className="text-xl text-gray-500">No Organisations Found</p>
        </div>
      )}
    </div>
  );
};

export default OrganisationList;
