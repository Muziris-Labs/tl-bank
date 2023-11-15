import Image from "next/image";

const TransactionFooter = ({ transaction }) => {
  return (
    <div className="mx-4 mb-6 flex w-full items-center justify-between rounded-md bg-gray-900 p-4">
      <div className="flex items-start gap-2">
        <div>
          <h2 className="font-medium text-gray-200">
            {transaction.sender.substring(0, 6)}...
            {transaction.sender.substring(
              transaction.sender.length - 4,
              transaction.sender.length,
            )}
          </h2>
          <h2 className="text-sm text-gray-400">{transaction.role}</h2>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <Image
          src="/images/home/coins/bankless.svg"
          alt="Bankless logo"
          width={32}
          height={32}
        />

        <div>
          <h2 className="font-medium text-gray-200">tlBANK</h2>
          <h2 className="text-sm text-gray-400">BanklessDAO</h2>
        </div>
      </div>
    </div>
  );
};

export default TransactionFooter;
