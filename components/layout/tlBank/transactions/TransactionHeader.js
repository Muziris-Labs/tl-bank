const TransactionHeader = () => {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <div className="w-2/12 text-gray-500">Status</div>

      <div className="hidden w-full text-gray-500 md:block md:w-2/12">
        Amount
      </div>

      <div className="w-2/12 text-gray-500">Contributor</div>

      <div className="hidden w-full max-w-[90px] text-right text-gray-500 md:block">
        Date
      </div>
    </div>
  );
};

export default TransactionHeader;
