// pages/api/runEmailScript.js
import { sendScheduledEmails } from '../../scripts/sendScheduledEmails'; 

export default async function handler(req, res) { // Removed type annotations 
  if (req.method === 'POST') { // You can also use GET if you prefer
    try {
      await sendScheduledEmails();
      res.status(200).json({ message: 'Email script executed successfully.' });
    } catch (error) {
      console.error('Error executing email script:', error);
      res.status(500).json({ message: 'Error executing email script.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}