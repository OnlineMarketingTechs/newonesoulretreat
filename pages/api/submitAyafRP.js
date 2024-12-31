import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstname, lastname, email, phone } = req.body;
    const zohoWebhookUrl = "https://flow.zoho.com/874321425/flow/webhook/incoming?zapikey=1001.217909e723998fd44ba3f14bd1bca465.36fa224546961525fbb633fe2cafe8ce&isdebug=true";

    const bookingData = {
      firstName: firstname,
      lastName: lastname,
      email,
      phone,
    };

    try {
      const response = await fetch(zohoWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        res.status(200).json({ redirectUrl: '/ayahuasca-for-real-people-dlset-type1' });
      } else {
        res.status(response.status).json({ message: 'Error submitting to Zoho' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}