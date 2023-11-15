import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

const Loading = () => {
  return (
    <div className="skeleton flex w-full items-center justify-between rounded-md bg-gray-900/90 px-4 py-3">
      <div className="flex w-1/3 items-center gap-2">
        <div className="flex w-12 items-center justify-center">
          <div className="skeleton flex h-5 w-5 items-center justify-center rounded-md"></div>
        </div>

        <p className="h-4 text-gray-400">Loading...</p>
      </div>

      <p className="skeleton h-4 w-28 text-gray-400"></p>
      <div aria-hidden="true" className="h-9 w-9"></div>

      <div className="flex space-x-3">
        <div>
          <TrashIcon className="h-5 w-5 text-gray-300" />
        </div>

        <div>
          <PencilSquareIcon className="h-5 w-5 text-gray-300" />
        </div>
      </div>
    </div>
  );
};

const ContributorLoading = () => {
  return (
    <div className="prevent-select flex flex-col space-y-3">
      <Loading />
      <Loading />
      <Loading />
    </div>
  );
};

export default ContributorLoading;
