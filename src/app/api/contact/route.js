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

    // Call Brevo HTTP API
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: process.env.BREVO_SENDER },
        to: [{ email: process.env.BREVO_RECEIVER }],
        subject: `New message from ${name}`,
        textContent: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        replyTo: { email },
      }),
    });

    if (!res.ok) throw new Error("Email API failed");

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

