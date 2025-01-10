/**
 * This file is used to reset the database.
 * Use it in your tests.
 */

import db from '../db/index';
import schema from '../db/schema';
import { reset } from 'drizzle-seed';

const resetDatabase = async (): Promise<boolean> => {
  try {
    await reset(db, schema);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default resetDatabase;
