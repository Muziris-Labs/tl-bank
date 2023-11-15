import { CheckIcon } from "@heroicons/react/24/outline";

const ContributorHeader = () => {
  return (
    <div className="flex w-full items-center justify-between px-4">
      <div className="flex w-1/3 items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-purple-600">
            <CheckIcon className="h-4 w-4 text-white " />
          </div>
        </div>

        <p className="text-gray-500">Name</p>
      </div>

      <p className="w-28 text-gray-500">Address</p>
      <div aria-hidden="true" className="h-9 w-9"></div>
      <p className="text-gray-500">Action</p>
    </div>
  );
};

export default ContributorHeader;
