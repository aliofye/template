/**
 * Establishes a connection to the PostgreSQL database using the drizzle-orm and postgres libraries.
 *
 * This module initializes a PostgreSQL client using the connection URL specified in the environment variable `DATABASE_URL`.
 * It then sets up the drizzle ORM with the client and configures it to use snake_case for database column names.
 *
 * @see {@link https://orm.drizzle.team/docs/connect-overview} for more details on connecting with drizzle ORM.
 * @see {@link https://orm.drizzle.team/docs/sql-schema-declaration#camel-and-snake-casing} for information on casing conventions.
 *
 * @module db
 */

import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const client = postgres(process.env.DATABASE_URL!);

const db = drizzle({ client, casing: 'snake_case' });

export default db;
