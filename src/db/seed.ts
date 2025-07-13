import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts';
import { schema } from './schema/index.ts';

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 30,
      columns: {
        name: f.companyName(),
        description: f.streetAddress(),
      },
    },
    questions: {
      count: 90,
    },
  };
});

await sql.end();

console.log('Database seeded');
