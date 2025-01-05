import Database from '../../db';
import { messagesTable } from '../../db/schema';

type Message = typeof messagesTable.$inferSelect;
type NewMessage = typeof messagesTable.$inferInsert;

class MessageRepository {
  constructor(private db: typeof Database) {
    this.db = db;
  }

  insertMessage(message: NewMessage): Promise<Message | undefined> {
    return this.db
      .insert(messagesTable)
      .values(message)
      .returning()
      .then((results) => results[0]);
  }

  getMessage(): Promise<Message | undefined> {
    return this.db
      .select()
      .from(messagesTable)
      .limit(1)
      .then((results) => results[0]);
  }

  getMessages(): Promise<Message[]> {
    return this.db.select().from(messagesTable);
  }
}

export default new MessageRepository(Database);
export type { Message, NewMessage };
