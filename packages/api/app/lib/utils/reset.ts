/**
 * @fileoverview Resets the database using the provided schema.
 *
 * This function attempts to reset the database using the `reset` function from 'drizzle-seed'.
 * If the reset operation is successful, it returns `true`. If an error occurs during the reset,
 * it logs the error to the console and returns `false`.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the database reset is successful,
 *                             or `false` if an error occurs.
 */

import { reset } from 'drizzle-seed';
import db from '@/api/lib/db/index';
import schema from '@/api/lib/db/schema';

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
