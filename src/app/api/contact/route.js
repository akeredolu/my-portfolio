import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { success: false, message: "All fields required" },
        { status: 400 }
      );
    }

    // Create the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com",
      port: Number(process.env.BREVO_SMTP_PORT) || 465,
      secure: process.env.BREVO_SMTP_SECURE === "false" ? false : true,
      auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.BREVO_SENDER}>`,
      to: process.env.BREVO_RECEIVER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (err) {
    console.error("Email send error:", err);

    return Response.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}

