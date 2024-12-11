// pages/api/submitBooking.js

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

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

      const db = await open({
        filename: './bookings.db', 
        driver: sqlite3.Database
      });

      const confirmationToken = uuidv4();

      // Insert the new contact with emailSequenceStep = 0
      await db.run(
        'INSERT INTO contacts (firstName, lastName, email, phone, emailSequenceStep, confirmationToken, isConfirmed) VALUES (?, ?, ?, ?, 0, ?, false)',
        [firstName, lastName, email, phone, confirmationToken]
      );

      // Fetch the newly inserted contact (including the generated ID and confirmationToken)
      const newContact = await db.get(
        'SELECT * FROM contacts WHERE email = ?',
        [email]
      );

      await db.close();

      // Construct the confirmation URL
      const confirmationUrl = `https://www.onesoulretreats.com/api/confirm?token=${newContact.confirmationToken}`; 

      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');

      // Personalize the HTML content with the confirmation URL
      const personalizedHtml = htmlContent
        .replace('[firstName]', newContact.firstName)
        .replace('[confirmationLink]', confirmationUrl); 

      await sendEmail(newContact, 'Welcome Email', '', personalizedHtml); 

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