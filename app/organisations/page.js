import Link from "next/link";

import OrganisationList from "@/components/layout/tlBank/organisation/OrganisationList";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const OrganisationsPage = () => {
  return (
    <main className="flex h-full flex-col items-center bg-black py-12">
      <h2 className="text-4xl font-bold">Your Organisation</h2>
      <p className="mt-4 text-2xl font-medium text-gray-600">
        Choose a safe from your list of Organisation.
      </p>

      <OrganisationList />

      <div className="mt-12 flex flex-col items-center space-y-2">
        <p className="text-base leading-normal">Don’t see your Organisation?</p>

        <Link
          href="#"
          className="text-pink flex items-center rounded-lg bg-[#FCADFF]/20 px-2 py-1 text-[#FCADFF]"
        >
          Join our Waitlist
          <ChevronRightIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </main>
  );
};

export default OrganisationsPage;
