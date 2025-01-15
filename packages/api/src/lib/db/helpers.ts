/**
 * @fileoverview This file is used to define helper functions for the database.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 * @see {@link https://orm.drizzle.team/docs/sql-schema-declaration#advanced} Drizzle ORM advanced schema declaration documentation.
 */

import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';

export const timestamps = {
  createdAt: timestamp('created_at').default(sql`now()`),
  updatedAt: timestamp('updated_at').default(sql`now()`),
  deletedAt: timestamp('deleted_at').default(sql`null`),
};
