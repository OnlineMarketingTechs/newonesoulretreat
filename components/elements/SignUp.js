import { useState } from 'react';

const AweberForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        ip_address: '',
        misc_notes: '',
        ad_tracking: '',
        strict_custom_fields: '', 
update_existing: 'true',
'tags': [
'onesoul',
'newads',
'onpage'
]
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submit-to-aweber',   
 {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle success, e.g., show a success message
                console.log('Form submitted successfully');
            } else {
                // Handle error, e.g., show an error message
                console.error('Error submitting form');
            }
        } catch (error)   
 {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"   
 />
            <input type="text"   
 name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            {/* Add other form fields as needed */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default AweberForm;