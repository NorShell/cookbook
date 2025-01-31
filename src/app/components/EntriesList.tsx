import { entriesTable } from "@/db/schema"
import { db } from "@/db"
import { Entry } from "./Entry"

export async function EntriesList() {

  let entries: typeof entriesTable.$inferSelect[] = []

  try {
    entries = await db.select().from(entriesTable)
  } catch (err) {
    console.error("Shit hit the fan fr fr", err)
  }

  if (entries.length === 0) {
    return <p>No entries yet</p>
  }

  return <ul>
    {entries.map(e => <Entry key={Math.random()} entry={e} />)}
  </ul>
}
