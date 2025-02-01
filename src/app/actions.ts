"use server";

import { db } from "@/db";
import { entriesTable, entryInsertSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function createEntry(formData: FormData) {

  await new Promise(resolve => setTimeout(resolve, 3000))

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
