import { AddReciepe } from "./components/AddReciepe";
import { Chef } from "./components/Chef";
import { ReciepeList } from "./components/ReciepeList";



export default function Home() {
  return (
    <main className="box-border w-full flex flex-col items-center justify-center gap-5 p-5 ">
      <Chef />
      <h1 className="text-5xl">Nor&apos;s Cook Book</h1>
      <h2 className="text-2xl" >Add your favourite reciepe for ... uhmmmm ... science </h2>
      <AddReciepe />
      <span className="h-10" ></span>
      <section className="w-full lg:w-1/3" >
        <h2 className="text-2xl" >What I have collected so far</h2>
        <ReciepeList />
      </section>
    </main>
  );
}
