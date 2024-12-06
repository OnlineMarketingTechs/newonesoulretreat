import db from '../../database';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone } = req.body;

      if (!firstName || !lastName || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required.'   
 });
      }

      const query = `INSERT INTO bookings (firstName, lastName, email, phone) VALUES (?, ?, ?, ?)`;
      const values = [firstName, lastName, email, phone];

      console.log('SQL Query:', query);
      console.log('Parameters:', values);

      // Wrap the database insertion in a promise
      const insertBooking = new Promise((resolve, reject) => {
        db.run(query, values, function (err) {
          if (err) {
            console.error('Error executing query:', err);
            reject(err);
          } else {
            resolve(this.lastID); // Resolve with the inserted ID
          }
        });
      });

      try {
        const insertedId = await insertBooking; // Get the inserted ID
        console.log('Data inserted successfully!');

        // Redirect to the questions page with the ID
        res.redirect(302, `/questions?id=${insertedId}`); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error submitting booking.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting booking.' });
    }
  } else {
    res.status(405).end();
  }
}