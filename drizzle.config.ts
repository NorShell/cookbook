import './envConfig.ts'
import { defineConfig } from 'drizzle-kit';

const dbUrl = process.env.TURSO_DATABASE_URL
const dbAuthToken = process.env.TURSO_AUTH_TOKEN

if (!dbUrl || !dbAuthToken) {
  console.log("Missing db credentials")
  console.table({
    dbAuthToken,
    dbUrl
  })
}

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
