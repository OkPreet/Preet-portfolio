const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your-email@gmail.com',   // Your Gmail
                pass: 'your-app-password'      // App password (not normal password)
            }
        });

        let mailOptions = {
            from: email,
            to: 'your-email@gmail.com',
            subject: `Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: "Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to send message." });
    }
});

module.exports = router;
