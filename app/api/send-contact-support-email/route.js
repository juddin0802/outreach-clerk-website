// api/send-contact-support-email/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const {
    senderFirstName,
    senderLastName,
    senderEmail,
    emailSubject,
    emailMessage
  } = await req.json();

  // Combine first and last name into a single senderName
  const senderFullName = `${senderFirstName} ${senderLastName}`;

  // Replacing line breaks with <br/> tags for email formatting
  const formattedMessage = emailMessage.replace(/\n/g, '<br/>');

  try {
    // Configure nodemailer with SMTP details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT, 10),
      secure: process.env.EMAIL_SERVER_PORT === '465', // Use TLS for port 465
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    });

    // Define email options
    const mailOptions = {
      from: 'OC Web Support Request <support-request@outreachclerk.com>',
      to: 'support@outreachclerk.com',
      replyTo: senderEmail,
      subject: emailSubject,
      html: `
        <p><strong>Sender Name:</strong> ${senderFullName}</p>
        <p><strong>Sender Email:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${formattedMessage}</p>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    //  const info = await transporter.sendMail(mailOptions);
    //  console.log(`Support email sent successfully from: ${senderEmail}`);
    //  console.log('Email sent response:', info);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error in /api/send-contact-support-email:', error.message);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
};
