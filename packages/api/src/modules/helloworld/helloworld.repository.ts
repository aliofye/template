/**
 * This is an example repository.
 * Repositories are used to interact with the database.
 */

import { eq } from 'drizzle-orm';
import Database from '../../db';
import { helloWorldTable } from '../../db/schema';

/**
 * You can use the $inferSelect and $inferInsert types to infer the types of the select and insert operations.
 * Read: https://orm.drizzle.team/docs/typescript#type-inference
 */
type SelectType = typeof helloWorldTable.$inferSelect;
type InsertType = typeof helloWorldTable.$inferInsert;

class HelloWorldRepository {
  constructor(private db: typeof Database) {
    this.db = db;
  }

  insert(message: InsertType): Promise<SelectType | undefined> {
    return this.db
      .insert(helloWorldTable)
      .values(message)
      .returning()
      .then((results) => results[0]);
  }

  getOne(): Promise<SelectType | undefined> {
    return this.db
      .select()
      .from(helloWorldTable)
      .limit(1)
      .then((results) => results[0]);
  }

  getOneById(id: string): Promise<SelectType | undefined> {
    return this.db
      .select()
      .from(helloWorldTable)
      .where(eq(helloWorldTable.id, id))
      .then((results) => results[0]);
  }

  getAll(): Promise<SelectType[]> {
    return this.db.select().from(helloWorldTable);
  }
}

export default new HelloWorldRepository(Database);
export type { SelectType, InsertType };
