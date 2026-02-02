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

    const transporter = nodemailer.createTransport({
      host: process.env.BREVO_SMTP_HOST,
      port: Number(process.env.BREVO_SMTP_PORT),
      secure: false,
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
      text: message,
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

