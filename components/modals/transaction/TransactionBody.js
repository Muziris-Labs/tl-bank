import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const TransactionBody = ({ transaction }) => {
  return (
    <>
      <div className="space-y-2 text-center">
        <div className="mx-auto w-fit rounded-md bg-[#00B728]/10 p-3">
          <PaperAirplaneIcon className="h-5 w-5 -translate-y-0.5 translate-x-px -rotate-45 text-[#00B728]" />
        </div>

        <p className="text-gray-200">{transaction.status}</p>
      </div>

      <div className="space-y-1 text-center">
        <div
          className="mx-auto w-1/2 overflow-hidden text-4xl font-semibold text-white"
          style={{ textOverflow: "ellipsis" }}
        >
          {transaction.price}
        </div>
        <div className="text-base font-medium text-[#FCADFF]">
          {transaction.contributor}
        </div>
      </div>
    </>
  );
};

export default TransactionBody;
