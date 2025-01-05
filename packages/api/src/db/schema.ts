/**
 * This file is used to define the schema of the database.
 * Read: https://orm.drizzle.team/docs/sql-schema-declaration
 */

import { pgTable, uuid, timestamp, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const messagesTable = pgTable('messages', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  text: varchar({ length: 255 }).notNull(),
  created_at: timestamp('created_at').default(sql`now()`),
  updated_at: timestamp('updated_at').default(sql`now()`),
  deleted_at: timestamp('deleted_at').default(sql`null`),
});
