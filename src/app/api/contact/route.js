import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields required" }),
        { status: 400 }
      );
    }

    // Use serverless-friendly SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,          // Use 587 for serverless
      secure: false,      // never true on serverless
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // avoid cert issues
      },
      // optional quick connection
      connectionTimeout: 5000, // 5 seconds max
      greetingTimeout: 5000,
      socketTimeout: 5000,
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.BREVO_SENDER}>`,
      to: process.env.BREVO_RECEIVER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Email send error:", err);

    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}

