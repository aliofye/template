/**
 * @fileoverview Seeds the database with random data using the drizzle-seed library.
 *
 * This file is responsible for populating the database with initial or random data,
 * typically for development and testing purposes.
 *
 * @version 1.0.0
 * @date 2025-01-15
 * @author Ali Morshid
 * @see {@link https://github.com/drizzle-team/drizzle-orm/tree/main/drizzle-seed} Documentation for the drizzle-seed library.
 *
 * @throws Will log an error message and exit the process with status code 1 if seeding fails.
 */

import { seed, reset } from 'drizzle-seed';
import db from '@/api/lib/db';
import schema from '@/api/lib/db/schema';

try {
  console.log('⠼ Seeding database with randomized data...');
  await reset(db, schema);
  await seed(db, schema, { count: 10 });
  console.log('✅ Database seeded successfully!');
  process.exit(0);
} catch (error) {
  console.log('❌ Failed to seed database with randomized data.');
  console.error(error);
  process.exit(1);
}
