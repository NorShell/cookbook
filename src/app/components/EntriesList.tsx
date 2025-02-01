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
    return <p className="text-center" >No entries yet .... </p>
  }

  return <>
    <h2 className="text-2xl" >What I have collected so far</h2>
    <ul >
      {entries.map(e => <Entry key={e.id} entry={e} />)}
    </ul>
  </>
}
