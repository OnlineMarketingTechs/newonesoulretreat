import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import nodemailer from 'nodemailer';
import cron from 'node-cron'; // Import node-cron here
import fs from 'fs/promises'; // Import for reading files

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT), // Parse port to a number
  secure: parseInt(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendEmail(contact, subject, text, html) {
    try {
      const info = await transporter.sendMail({
        from: 'noreply@onesoulretreats.com',
        to: contact.email,
        subject: subject,
        text: text,
        html: html, // include html content 
        // You can also use html: '<b>Hello world?</b>' for HTML emails
      });
  
      console.log('Email sent:', info.messageId);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  // Removed the closing curly brace for the nested function:
  // } 
}

export async function sendScheduledEmails() {
  try {
    const db = await open({
      filename: './bookings.db',
      driver: sqlite3.Database,
    });

    // Fetch contacts for each step
    const contactsStep0 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 0');
    const contactsStep1 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 1');
    const contactsStep2 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 2');
    const contactsStep3 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 3');
    const contactsStep4 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 4');
    const contactsStep5 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 5');
    const contactsStep6 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 6');
    const contactsStep7 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 7');
    const contactsStep8 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 8');
    const contactsStep9 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 9');
    const contactsStep10 = await db.all('SELECT * FROM contacts WHERE emailSequenceStep = 10');

    // Send emails and update sequence step

    for (const contact of contactsStep0) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 1 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep1) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 2 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep2) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 3 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep3) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 4 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep4) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 5 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep5) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 6 WHERE id = ?', [contact.id]);
    }  
    for (const contact of contactsStep6) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 7 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep7) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 8 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep8) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 9 WHERE id = ?', [contact.id]);
    }
    for (const contact of contactsStep9) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      // Personalize the HTML content
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName); 
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml); // Pass the contact object
      await db.run('UPDATE contacts SET emailSequenceStep = 10 WHERE id = ?', [contact.id]);
    }






    await db.close();
  } catch (error) {
    console.error('Error sending scheduled emails:', error);
  }
}

cron.schedule('0 0 * * *', sendScheduledEmails); // Schedule the cron job

sendScheduledEmails(); // Call the function to execute immediately