/**
 * @fileoverview Configuration file for Drizzle ORM migration setup.
 *
 * This file configures the `drizzle-kit` migration tool for the project. It specifies
 * the output directory for migrations, the schema file, and the database connection
 * credentials. The configuration is set for a PostgreSQL database.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 *
 * @see {@link https://orm.drizzle.team/docs/drizzle-config-file} Drizzle ORM migrations documentation.
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './migrations',
  schema: './app/lib/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: 'migrations',
    schema: 'drizzle',
  },
});
