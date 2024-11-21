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

      const insertBooking = new Promise((resolve, reject) => {
        db.run(query, values, function (err) {
          if (err) {
            console.error('Error executing query:', err);
            reject(err);
          } else {
            resolve();
          }
        });
      });

      try {
        await insertBooking;
        console.log('Data inserted successfully!');
        res.status(200).json({ message: 'Booking submitted successfully!' });
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