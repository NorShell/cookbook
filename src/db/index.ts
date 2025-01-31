import { drizzle } from 'drizzle-orm/libsql';

const dbUrl = process.env.TURSO_DATABASE_URL
const dbAuthToken = process.env.TURSO_AUTH_TOKEN


export const db = drizzle({
  connection: {
    url: dbUrl!,
    authToken: dbAuthToken!
  }
});
