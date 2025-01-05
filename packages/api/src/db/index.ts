/**
 * This file is responsible for creating a connection to the database.
 * Read: https://orm.drizzle.team/docs/connect-overview
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(Bun.env.DATABASE_URL!);
const db = drizzle({ client });

export default db;
