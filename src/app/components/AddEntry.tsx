"use client"
import { useFormStatus } from "react-dom";
import { createEntry } from "../actions";

export function AddEntry() {

  const { pending } = useFormStatus()

  return <form
    action={createEntry}
    className="text-lg w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 " >
    <label className="self-start" >Reciepe</label>
    <input
      name="name"
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="Burgers"
    />
    <label className="self-start" >Name</label>
    <input
      name="author"
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="Nor"
    />
    <span></span>
    <button
      disabled={pending}
      className="w-full p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-black " >{pending ? "Loading" : "Add"}</button>
    {pending && <span>Loading ....</span>}
  </form>
}
