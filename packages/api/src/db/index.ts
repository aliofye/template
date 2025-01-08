/**
 * This file is responsible for creating a connection to the database.
 * Read: https://orm.drizzle.team/docs/connect-overview
 */

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const client = postgres(Bun.env.DATABASE_URL!);

/**
 * This is where we setup drizzle for the connection
 * We also setup the casing for the database
 * https://orm.drizzle.team/docs/sql-schema-declaration#camel-and-snake-casing
 */
const db = drizzle({ client, casing: 'snake_case' });

export default db;
