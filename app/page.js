import Image from "next/image";

import { TlBankLoginBtn } from "@/components/ui/ClientButtons";

const TlBankPage = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black">
      <Image
        src="/images/tlbank/logo.png"
        alt="TL Bank Logo"
        width={320}
        height={320}
      />

      <div className="mt-6 flex flex-col gap-4 text-center">
        <h2 className="prevent-select w-fit bg-tlBank-gradient-primary text-7xl font-bold leading-normal gradient-text-primary">
          Enabling Payments in TlBank
        </h2>

        <p className="text-xl">
          Empowering BanklessDAO Contributors with TlBank Rewards
        </p>
      </div>

      <TlBankLoginBtn />
    </main>
  );
};

export default TlBankPage;
