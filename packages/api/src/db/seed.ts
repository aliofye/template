/**
 * This script is used to seed the database with initial data.
 * You can add more data to seed the database with.
 */

import Database from './index';
import { messagesTable } from './schema';
import MessageRepository from '../modules/message/message.repository';

class Seed {
  async clear(): Promise<void> {
    await Database.delete(messagesTable);
  }

  async run(): Promise<void> {
    try {
      await MessageRepository.insertMessage({ text: 'Hello, World!' });
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}

const seed = new Seed();
seed.clear();
seed.run();
