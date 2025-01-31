export function AddReciepe() {
  return <form className="text-lg w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 " >
    <label className="self-start" >Reciepe</label>
    <input
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="Burgers"
    />
    <label className="self-start" >X account</label>
    <input
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="@NorDotShell"
    />
    <span></span>
    <button className="w-full p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-black " >Add</button>
  </form>
}
