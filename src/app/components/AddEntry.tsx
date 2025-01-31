import { db } from "@/db";
import { entriesTable, entryInsertSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";

export function AddEntry() {

  async function createEntry(formData: FormData) {
    "use server";

    const { name, author } = entryInsertSchema.parse({
      name: String(formData.get('name')),
      author: String(formData.get('author')),
    })

    try {
      await db.insert(entriesTable).values({
        name: name,
        author: author
      })
    } catch (error) {
      console.error(error)
    }

    revalidatePath('/')
  }


  return <form
    action={createEntry}
    className="text-lg w-full lg:w-1/3 flex flex-col justify-center items-center gap-4 " >
    <label className="self-start" >Reciepe</label>
    <input
      name="name"
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="Burgers"
    />
    <label className="self-start" >X account</label>
    <input
      name="author"
      className="w-full bg-black p-2 border-2 border-white rounded-lg"
      placeholder="@NorDotShell"
    />
    <span></span>
    <button
      className="w-full p-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-black " >Add</button>
  </form>
}
