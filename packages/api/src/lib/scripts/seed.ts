/**
 * This script is used to seed the database with random data.
 * Read: https://github.com/drizzle-team/drizzle-orm/tree/main/drizzle-seed
 */

import { seed, reset } from 'drizzle-seed';
import db from '../db';
import schema from '../db/schema';

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
