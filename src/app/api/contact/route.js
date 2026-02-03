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

    // Validate env
    const { BREVO_API_KEY, BREVO_SENDER, BREVO_RECEIVER } = process.env;
    if (!BREVO_API_KEY || !BREVO_SENDER || !BREVO_RECEIVER) {
      console.error("Missing env vars");
      return new Response(
        JSON.stringify({ success: false, message: "Server misconfiguration" }),
        { status: 500 }
      );
    }

    // Send email
    const emailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: BREVO_SENDER },
        to: [{ email: BREVO_RECEIVER }],
        subject: `New message from ${name}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
        replyTo: { email },
      }),
    });

    // If API fails
    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("Brevo API error:", errorText);
      return new Response(
        JSON.stringify({ success: false, message: "Email API failed: " + errorText }),
        { status: 500 }
      );
    }

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

