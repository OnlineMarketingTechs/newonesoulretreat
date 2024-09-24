import Database from 'better-sqlite3';

export function connectToDatabase() {
  const db = new Database('../portfolio.db', { verbose: console.log });
  return db;
}