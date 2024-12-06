import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) { 
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone } = req.body;

      const db = await open({
        filename: './bookings.db', 
        driver: sqlite3.Database
      });

      await db.run(
        'INSERT INTO contacts (firstName, lastName, email, phone) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, phone]
      );
      await db.close();

        // 2. Post to AWeber
        const aWeberResponse = await fetch('YOUR_AWEBER_WEBHOOK_URL', { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, firstName, lastName, phone }) // Customize as needed
          });
    
          if (!aWeberResponse.ok) {
            throw new Error(`AWeber Error: ${aWeberResponse.status} ${aWeberResponse.statusText}`);
          }
    
          // 3. Send email notification
          // (You'll need to set up an email sending service like Nodemailer, SendGrid, etc.)
          // Replace with your actual email sending logic
          // await sendEmail({
          //   to: 'Danny@onlinemarketingtechs.com',
          //   subject: 'New Booking',
          //   text: `New booking from ${firstName} ${lastName} (${email}, ${phone})`
          // });

      res.status(200).json({ message: 'Booking submitted successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting booking.' });
    }
  } else {
    res.status(405).end(); 
  }
}