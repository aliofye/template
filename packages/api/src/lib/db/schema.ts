/**
 * This file defines the schema of the database using Drizzle ORM.
 *
 * @see {@link https://orm.drizzle.team/docs/sql-schema-declaration}
 *
 * @module schema
 */

import { sql } from 'drizzle-orm';
import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import {
  createSelectSchema,
  createInsertSchema,
  createUpdateSchema,
} from 'drizzle-zod';
import { timestamps } from './helpers';

/**
 * Example table definition.
 *
 * @remarks
 * This is an example table. Feel free to delete it and the migration under `api/migrations` to start fresh.
 *
 * @example
 * ```typescript
 * import { exampleTable } from './schema';
 * ```
 */
export const exampleTable = pgTable('examples', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  text: varchar({ length: 255 }).notNull(),
  ...timestamps,
});

/**
 * Zod schema for selecting data from the example table.
 *
 * @see {@link https://orm.drizzle.team/docs/zod}
 */
export const ExampleSelectSchema = createSelectSchema(exampleTable);

/**
 * Zod schema for inserting data into the example table.
 *
 * @remarks
 * The `id`, `createdAt`, `updatedAt`, and `deletedAt` fields are omitted from the insert schema.
 */
export const ExampleInsertSchema = createInsertSchema(exampleTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

/**
 * Zod schema for updating data in the example table.
 *
 * @remarks
 * The `id`, `createdAt`, `updatedAt`, and `deletedAt` fields are omitted from the update schema.
 */
export const ExampleUpdateSchema = createUpdateSchema(exampleTable).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

/**
 * Exported tables for use in seed.ts.
 */
export default {
  exampleTable,
};
