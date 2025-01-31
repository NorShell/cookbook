import { AddReciepe } from "./components/AddReciepe";
import { Chef } from "./components/Chef";

export default function Home() {
  return (
    <div className="box-border w-full flex flex-col items-center justify-center gap-5 p-5 ">
      <Chef />
      <h1 className="text-2xl" >Nor's Cook Book</h1>
      <h2 className="text-2xl" >Add your favourite reciepe</h2>
      <AddReciepe />
    </div>
  );
}
