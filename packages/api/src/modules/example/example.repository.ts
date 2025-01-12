import { eq } from 'drizzle-orm';
import Database from '@/api/lib/db';
import { exampleTable } from '@/api/lib/db/schema';

/**
 * You can use the $inferSelect and $inferInsert types to infer the types of the select and insert operations.
 * Read: https://orm.drizzle.team/docs/typescript#type-inference
 */
type SelectType = typeof exampleTable.$inferSelect;
type InsertType = typeof exampleTable.$inferInsert;

class ExampleRepository {
  constructor(private db: typeof Database) {
    this.db = db;
  }

  insert(message: InsertType): Promise<SelectType | undefined> {
    return this.db
      .insert(exampleTable)
      .values(message)
      .returning()
      .then((results) => results[0]);
  }

  getOne(): Promise<SelectType | undefined> {
    return this.db
      .select()
      .from(exampleTable)
      .limit(1)
      .then((results) => results[0]);
  }

  getOneById(id: string): Promise<SelectType | undefined> {
    return this.db
      .select()
      .from(exampleTable)
      .where(eq(exampleTable.id, id))
      .then((results) => results[0]);
  }

  getAll(): Promise<SelectType[]> {
    return this.db.select().from(exampleTable);
  }
}

export default new ExampleRepository(Database);
export type { SelectType, InsertType };
