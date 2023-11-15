import QueueTransactions from "@/components/layout/tlBank/dashboard/QueueTransactions";
import CryptoList from "@/components/layout/tlBank/dashboard/CryptoList";
import Balance from "@/components/layout/tlBank/dashboard/Balance";
import PayContributor from "@/components/layout/tlBank/dashboard/PayContributor";

const DashboardPage = () => {
  return (
    <main className="mx-4 max-w-6xl space-y-12 py-10 font-grotesque xl:mx-auto">
      <Balance />

      <div className="mt-12 flex flex-wrap gap-6">
        <CryptoList />
      </div>

      <div className="flex w-full gap-6">
        <PayContributor />
        <QueueTransactions />
      </div>
    </main>
  );
};

export default DashboardPage;
