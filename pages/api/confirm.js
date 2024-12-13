// pages/api/confirm.js

import { supabase } from '../../lib/supabase'; // Import the Supabase client

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.query.token;

    try {
      const { data, error } = await supabase
        .from('contacts')
        .update({ isconfirmed: true }) 
        .eq('confirmationtoken', token);

      if (error) {
        throw error;
      }

      res.redirect('/thank-you-confirmation'); // Redirect to a confirmation page
    } catch (error) {
      // ... error handling ...
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}