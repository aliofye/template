/**
 * This file is used to define the schema of the database.
 * Read: https://orm.drizzle.team/docs/sql-schema-declaration
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
 * This is an example table.
 * Feel free to delete it and the migration under api/drizzle to start fresh
 */
export const exampleTable = pgTable('examples', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  text: varchar({ length: 255 }).notNull(),
  ...timestamps,
});

/**
 * Export zod schemas for validation on routes
 * Read: https://orm.drizzle.team/docs/zod
 */
export const ExampleSelectSchema = createSelectSchema(exampleTable);
export const ExampleInsertSchema = createInsertSchema(exampleTable);
export const ExampleUpdateSchema = createUpdateSchema(exampleTable);

/**
 * Export the tables for use in seed.ts
 */
export default {
  exampleTable,
};
