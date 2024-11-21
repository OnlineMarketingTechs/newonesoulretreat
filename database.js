import sqlite3 from 'sqlite3';
import path from 'path';

const rootDir = path.resolve('.');
const dbPath = path.join(rootDir, 'bookings.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the bookings database.');
  }
});

// Create the bookings table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL   

  )
`);

export default db;