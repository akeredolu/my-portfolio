import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req) {
  try {
    // Force load env manually
    const envPath = path.resolve(process.cwd(), ".env.local");
    const envContent = fs.readFileSync(envPath, "utf-8");

    const lines = envContent.split("\n");
    const envVars = {};
    for (let line of lines) {
      const [key, ...rest] = line.split("=");
      if (!key) continue;
      envVars[key.trim()] = rest.join("=").trim();
    }

    const SMTP_USER = envVars.BREVO_SMTP_USER;
    const SMTP_PASS = envVars.BREVO_SMTP_PASS;
    const SENDER = envVars.BREVO_SENDER;
    const RECEIVER = envVars.BREVO_RECEIVER;

    console.log("MANUAL ENV CHECK →", { SMTP_USER, SMTP_PASS, SENDER, RECEIVER });

    const { name, email, message } = await req.json();

    if (!name || !email || !message)
      return new Response(JSON.stringify({ success: false, message: "All fields required" }), { status: 400 });

    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${SENDER}>`,
      to: RECEIVER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ success: false, message: "Failed to send email." }), { status: 500 });
  }
}

