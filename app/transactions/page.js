import { ExportTransactionBtn } from "@/components/ui/ClientButtons";
import TransactionList from "@/components/layout/tlBank/transactions/TransactionList";

const TransactionsPage = () => {
  return (
    <main className="flex h-full flex-col items-center bg-black px-4 py-20 xl:px-0">
      <div className="flex w-full max-w-6xl justify-between">
        <h2 className="text-3xl font-bold">Transactions</h2>

        <ExportTransactionBtn />
      </div>

      <TransactionList />
    </main>
  );
};

export default TransactionsPage;
