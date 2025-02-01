import { Suspense } from "react";
import { AddEntry } from "./components/AddEntry";
import { Chef } from "./components/Chef";
import { EntriesList } from "./components/EntriesList";
import { EntriesFallback } from "./components/EntriesFallback";

export default function Home() {
  return (
    <main className="box-border w-full flex flex-col items-center justify-center gap-5 p-5 ">
      <Chef />
      <h1 className="text-5xl text-center ">Nor&apos;s Cook Book</h1>
      <h2 className="text-2xl text-center " >Add your favourite reciepe for ... uhmmmm ... science </h2>
      <AddEntry />
      <span className="h-5" ></span>
      <section className="w-full lg:w-1/3" >
        <Suspense fallback={<EntriesFallback />} >
          <EntriesList />
        </Suspense>
      </section>
    </main>
  );
}
