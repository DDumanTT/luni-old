import { app } from 'electron';
import sqlite from 'sqlite3';
import path from 'path';
import { createConnection } from 'typeorm';
import { Game } from '../models/Game';

// Configure sqlite database
const sqlite3 = sqlite.verbose();

const dbPath =
  process.env.NODE_ENV === 'development'
    ? 'database.db'
    : path.resolve(app.getPath('userData'), 'database.db');

const db = new sqlite3.Database(dbPath);
db;

// db.serialize(() => {
//   db.run('CREATE TABLE lorem (info TEXT)');

//   const stmt = db.prepare('INSERT INTO lorem VALUES (?)');
//   for (let i = 0; i < 10; i += 1) {
//     stmt.run(`Ipsum ${i}`);
//   }
//   stmt.finalize();

//   db.each('SELECT rowid AS id, info FROM lorem', (_err, row) => {
//     console.log(`${row.id}: ${row.info}`);
//   });
// });

// db.close();

createConnection({
  type: 'sqlite',
  database: dbPath,
  synchronize: true,
  entities: [Game],
})
  .then(async (connection) => {
    let game = new Game();
    game.title = 'GTA: lule';
    await connection.manager.save(game);
  })
  .catch((err) => console.log(err));
