// scripts/sendScheduledEmails.js

import { supabase } from '../lib/supabase';
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import fs from 'fs/promises';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
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
      html: html,
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendScheduledEmails() {
  try {
    // Fetch contacts for each step from Supabase
    const { data: contactsStep0, error: error0 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailsequencestep', 0); 

    if (error0) {
      throw error0;
    }

    const { data: contactsStep1, error: error1 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 1);

    if (error1) {
      throw error1;
    }

    const { data: contactsStep2, error: error2 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 2);

    if (error2) {
      throw error2;
    }

    const { data: contactsStep3, error: error3 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 3);

    if (error3) {
      throw error3;
    }

    const { data: contactsStep4, error: error4 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 4);

    if (error4) {
      throw error4;
    }

    const { data: contactsStep5, error: error5 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 5);

    if (error5) {
      throw error5;
    }

    const { data: contactsStep6, error: error6 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 6);

    if (error6) {
      throw error6;
    }

    const { data: contactsStep7, error: error7 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 7);

    if (error7) {
      throw error7;
    }

    const { data: contactsStep8, error: error8 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 8);

    if (error8) {
      throw error8;
    }

    const { data: contactsStep9, error: error9 } = await supabase
      .from('contacts')
      .select('*')
      .eq('emailSequenceStep', 9);

    if (error9) {
      throw error9;
    }

    // Send emails and update sequence step
    for (const contact of contactsStep0) {
      const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Welcome Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailsequencestep: 1 }) 
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    for (const contact of contactsStep1) {
      const htmlContent = await fs.readFile('emails/day1.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Day 1 Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailSequenceStep: 2 })
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    for (const contact of contactsStep2) {
      const htmlContent = await fs.readFile('emails/day2.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Day 2 Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailSequenceStep: 3 })
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    for (const contact of contactsStep3) {
      const htmlContent = await fs.readFile('emails/day3.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Day 3 Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailSequenceStep: 4 })
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    for (const contact of contactsStep4) {
      const htmlContent = await fs.readFile('emails/day7.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Day 7 Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailSequenceStep: 5 })
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    for (const contact of contactsStep5) {
      const htmlContent = await fs.readFile('emails/day10.html', 'utf-8');
      const personalizedHtml = htmlContent.replace('[firstName]', contact.firstName);
      await sendEmail(contact, 'Day 10 Email', '', personalizedHtml);

      const { error: updateError } = await supabase
        .from('contacts')
        .update({ emailSequenceStep: 6 })
        .eq('id', contact.id);

      if (updateError) {
        throw updateError;
      }
    }

    // ... and so on for other steps, if needed

  } catch (error) {
    console.error('Error sending scheduled emails:', error);
  }
}

cron.schedule('0 0 * * *', sendScheduledEmails); // Schedule the cron job

sendScheduledEmails(); // Call the function to execute immediately