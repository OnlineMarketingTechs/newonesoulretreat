import { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const token = req.query.token;

    try {
      const db = await open({
        filename: './bookings.db',
        driver: sqlite3.Database,
      });

      await db.run(
        'UPDATE contacts SET isConfirmed = true WHERE confirmationToken = ?',
        [token]
      );

      await db.close();

      res.redirect('/thank-you-confirmation'); // Redirect to a confirmation page
    } catch (error) {
      // ... error handling ...
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}