/**
 * This script is used to seed the database with initial data.
 * You can add more data to seed the database with.
 */

import clear from './clear';
import HelloWorldRepository from '../modules/helloworld/helloworld.repository';

const run = async (): Promise<void> => {
  try {
    await HelloWorldRepository.insert({ text: 'Hello, World!' });
    console.log('Seeded database!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

await clear();
await run();
