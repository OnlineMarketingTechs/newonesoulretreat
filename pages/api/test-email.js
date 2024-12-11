// pages/api/test-email.js
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';

export default async function handler(req, res) {
  try {
    const htmlContent = await fs.readFile('emails/welcome.html', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.send(htmlContent);
  } catch (error) {
    console.error('Error reading email template:', error);
    res.status(500).send('Error reading email template');
  }
}