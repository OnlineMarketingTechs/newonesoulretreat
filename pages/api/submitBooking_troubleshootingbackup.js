// pages/api/submitBooking.js

import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../../lib/supabase';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: parseInt(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
});

// Define the sendEmail function
async function sendEmail(contact, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: 'noreply@onesoulretreats.com',
      to: contact.email,
      subject: subject,
      text: text,
      html: html,
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone } = req.body;

      // First, insert the new contact *without* the confirmationToken
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            emailsequencestep: 0,
            isconfirmed: false
          }
        ]);

      if (error) {
        throw error;
      }

      const newContact = await supabase
        .from('contacts')
        .select('*')
        .eq('email', email)
        .single();

      if (newContact.error) {
        throw newContact.error;
      }

      const confirmationtoken = uuidv4(); // Generate the token

      // Now, update the record with the confirmationToken
      const { data: updatedData, error: updateError } = await supabase
        .from('contacts')
        .update({ confirmationtoken: confirmationtoken })
        .eq('id', newContact.data.id);

      if (updateError) {
        throw updateError;
      }

      // Construct the confirmation URL
      const confirmationUrl = `https://www.onesoulretreats.com/api/confirm?token=${newContact.data.confirmationtoken}`;

      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');

      // Personalize the HTML content with the confirmation URL
      const personalizedHtml = htmlContent
        .replace('[firstName]', newContact.data.firstName)
        .replace('[confirmationLink]', confirmationUrl);

      await sendEmail(newContact.data, 'Welcome Email', '', personalizedHtml);

      // ... (rest of the API route code) ...

      res.status(200).json({
        redirectUrl: '/thank-you',
        firstName: firstName
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting booking.' });
    }
  } else {
    res.status(405).end();
  }
}