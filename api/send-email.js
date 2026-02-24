const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { sender, subject, description } = req.body || {};
  if (!sender || !subject || !description) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Read SMTP configuration from environment variables
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.RECIPIENT || 'gerswin.ravelo@urios.edu.ph';

  if (!host || !user || !pass) {
    res.status(500).json({ error: 'SMTP not configured on server' });
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `${sender} <${user}>`,
      to: recipient,
      subject: `${sender} - ${subject}`,
      text: `Sender: ${sender}\n\n${description}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-email error', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
