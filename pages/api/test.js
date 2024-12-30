
import nextConnect from 'next-connect';

const handler = nextConnect();

handler.post((req, res) => { // Changed to handler.post
  res.status(200).json({ message: 'Test API route working' });
});

export default handler;