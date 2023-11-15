const Loading = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3">
      <div className="flex w-2/12 items-center gap-2 text-left text-gray-400">
        <div className="skeleton rounded-md bg-[#00B728]/10 p-3">
          <div className="h-5 w-5"></div>
        </div>
        Loading...
      </div>

      <div className="skeleton hidden h-4 w-2/12 overflow-hidden whitespace-nowrap md:block"></div>

      <div className="skeleton h-4 w-2/12 overflow-hidden whitespace-nowrap"></div>

      <div className="skeleton hidden h-4 w-[90px] text-right md:block"></div>
    </div>
  );
};

const TransactionLoading = () => {
  return (
    <div className="prevent-select flex flex-col space-y-3">
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};

export default TransactionLoading;
