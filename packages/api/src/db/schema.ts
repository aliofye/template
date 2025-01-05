import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const messagesTable = pgTable('messages', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  text: varchar({ length: 255 }).notNull(),
});
