import { store } from "@/redux/store";
import localFont from "next/font/local";

import ReduxProvider from "@/provider/ReduxProvider";
import { WagmiProvider } from "@/provider/WagmiProvider";

import LoginModal from "@/components/modals/LoginModal";
import TlBankNav from "@/components/navBar/TlBankNav";
import ContributorModal from "@/components/modals/ContributorModal";
import RoleModal from "@/components/modals/RoleModal";
import TransactionModal from "@/components/modals/TransactionModal";
import AddContributorsModal from "@/components/modals/AddContributorsModal";
import { ToggleDialer } from "@/components/layout/tlBank/toggleDialer";
import TxCompleteModal from "@/components/modals/TxCompleteModal";

import "./globals.css";

const grotesque = localFont({
  src: [
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/basis-grotesque/BasisGrotesqueArabicPro-Bold.woff2",
      weight: "700",
    },
  ],

  variable: "--font-grotesque",
});

const clashDisplay = localFont({
  src: "../public/fonts/clash-display/ClashDisplay-Variable.woff2",
  variable: "--font-clash-display",
});

const conthrax = localFont({
  src: "../public/fonts/conthrax/conthrax-sb.ttf",
  variable: "--font-conthrax",
});

const neue = localFont({
  src: [
    {
      path: "../public/fonts/neue-machina/NeueMachina-Ultralight.woff2",
      weight: "200",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Ultrabold.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/neue-machina/NeueMachina-Black.woff2",
      weight: "900",
    },
  ],

  variable: "--font-neue",
});

export const metadata = {
  title: "B-Wallet | tlBank",
  description: "By BanklessDAO",
  icons: {
    shortcut: [{ url: "/favicon.ico", sizes: "16x16", type: "image/ico" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${grotesque.variable} ${clashDisplay.variable} ${conthrax.variable} ${neue.variable}`}
      lang="en"
    >
      <body className="overflow-x-hidden font-grotesque">
        <ReduxProvider store={store}>
          <WagmiProvider>
            <div className="relative h-screen">
              <LoginModal />
              <RoleModal />
              <TransactionModal />
              <ContributorModal />
              <AddContributorsModal />
              <TxCompleteModal />

              <section className="min-h-full bg-black font-grotesque">
                <TlBankNav />
                <ContributorModal />

                {children}
              </section>
              <ToggleDialer />
            </div>
          </WagmiProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
