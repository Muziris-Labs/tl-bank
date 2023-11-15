import TransactionList from "./TransactionList";

const QueueTransactions = () => {
  return (
    <section className="flex-[2] rounded-xl bg-gray-900 p-4">
      <h3 className="border-b border-gray-700 bg-transparent pb-3 text-xl font-semibold">
        Queue Transactions
      </h3>

      <TransactionList />
    </section>
  );
};

export default QueueTransactions;
