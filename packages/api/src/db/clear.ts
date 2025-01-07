import Database from './index';
import { messagesTable } from './schema';

const clear = async (): Promise<boolean> => {
  try {
    await Database.delete(messagesTable);
    console.log('Targeting database: ', Bun.env.DATABASE_URL);
    console.log('Cleared database!');
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default clear;
