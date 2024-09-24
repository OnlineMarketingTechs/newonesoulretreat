import sql from 'better-sqlite3';
const db = sql('website.db'); // Adjust the database name if needed

export function getProjects() {
  return db.prepare('SELECT * FROM projects').all();
}
