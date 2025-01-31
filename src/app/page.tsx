import { AddEntry } from "./components/AddEntry";
import { Chef } from "./components/Chef";
import { EntriesList } from "./components/EntriesList";


export default function Home() {
  return (
    <main className="box-border w-full flex flex-col items-center justify-center gap-5 p-5 no-scrollbar">
      <Chef />
      <h1 className="text-5xl">Nor&apos;s Cook Book</h1>
      <h2 className="text-2xl" >Add your favourite reciepe for ... uhmmmm ... science </h2>


      <AddEntry />
      <span className="h-10" ></span>
      <section className="w-full lg:w-1/3" >
        <h2 className="text-2xl" >What I have collected so far</h2>
        <EntriesList />
      </section>
    </main>
  );
}
