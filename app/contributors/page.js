import { ContributorModalBtn } from "@/components/ui/ClientButtons";
import ContributorList from "@/components/layout/tlBank/contributor/ContributorList";

const ContributorsPage = () => {
  return (
    <main className="mx-4 mt-20 flex h-full max-w-6xl flex-col items-center bg-black xl:mx-auto">
      <div className="flex w-full max-w-6xl justify-between">
        <h2 className="text-3xl font-bold">Contributors</h2>

        <ContributorModalBtn />
      </div>

      <ContributorList />
    </main>
  );
};

export default ContributorsPage;
