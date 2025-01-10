/**
 * This file is used to define helper functions for the database.
 * Read: https://orm.drizzle.team/docs/sql-schema-declaration#advanced
 */

import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  createdAt: timestamp('created_at').default(sql`now()`),
  updatedAt: timestamp('updated_at').default(sql`now()`),
  deletedAt: timestamp('deleted_at').default(sql`null`),
};
