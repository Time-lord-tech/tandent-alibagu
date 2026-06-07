import { Resend } from 'resend';

// Vercel handles the environment variables automatically.
// You will need to add RESEND_API_KEY in your Vercel project settings.
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_local_dev');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    // 1. Send the Instant 5-Minute Follow-up to the Patient
    await resend.emails.send({
      from: 'A&S Dental Home <hello@yourdomain.com>', // Update this when you have a domain
      to: email,
      subject: 'We received your appointment request!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thanks for reaching out to A&S Dental Home.</p>
        <p>This is an automated confirmation that we received your message. Our lead coordinator, Roberto, will call or text you at <strong>${phone}</strong> within the next 5 to 10 minutes to confirm your appointment time.</p>
        <p>If this is a dental emergency, please call us directly at 0917 303 8424.</p>
        <br/>
        <p>Warmly,</p>
        <p><strong>The A&S Dental Team</strong></p>
      `
    });

    // 2. Alert the Dentist / Clinic Staff Immediately
    await resend.emails.send({
      from: 'System <hello@yourdomain.com>', // Update this
      to: 'your-clinic-email@gmail.com', // The dentist's actual email
      subject: `🚨 NEW PATIENT LEAD: ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <br/>
        <p><em>Action Required: Call this patient within 5 minutes to secure the booking.</em></p>
      `
    });

    return res.status(200).json({ success: true, message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
