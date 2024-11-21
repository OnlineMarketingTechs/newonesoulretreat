import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, ip_address, misc_notes, ad_tracking, strict_custom_fields, update_existing, tags, } = req.body;

        // Validate data here (e.g., email format, required fields)

        try {
            const response = await axios.post(
                'https://api.aweber.com/1.0/lists/YOUR_LIST_ID/subscribers',
                {
                    email,
                    name,
                    ip_address,
                    misc_notes,
                    ad_tracking,
                    strict_custom_fields, 
                update_existing,
                tags,
                },
                {
                    headers: {
                        Authorization: 'KvPZj52iUjZ2mFDtsXUN6swlMk5WBIpk'
                    }
                }
            );

            console.log('Form submitted successfully:', response.data);
            res.status(200).json({ message: 'Form submitted successfully' });
        } catch (error) {
            console.error('Error submitting form:', error);
            res.status(500).json({ error: 'Failed to submit form' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
