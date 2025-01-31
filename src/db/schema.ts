import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";

export const entriesTable = sqliteTable("entriesTable", {
  id: integer().primaryKey({ autoIncrement: true }).notNull(),
  name: text(),
  author: text()
})

export const entryInsertSchema = createInsertSchema(entriesTable)

