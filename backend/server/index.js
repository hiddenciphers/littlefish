const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/send-email', async (req, res) => {
    const { firstName, lastName, email, enquiryType } = req.body;

    try {
        const response = await resend.emails.send({
            from: 'mail@littlefishaccounting.com.au', // this address needs to be verified on resend.com
            to: 'thomas@littlefishaccounting.com.au',
            subject: 'New Contact Form Submission | Little Fish Accounting',
            html: `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Nature of Enquiry:</strong> ${enquiryType.join(', ')}</p>
            `,
        });

        console.log('✅ Resend API Response:', response); // <-- remove this log before deployment

        res.status(200).json({ success: true, response });
    } catch (error) {
        console.error('❌ Error sending email:', error); // <-- remove this log before deployment
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
