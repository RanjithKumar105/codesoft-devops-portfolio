import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // Sanitize values minimally (trim whitespace)
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // Demo portfolio: contact form emails are sent to the configured recipient address.
    // Set CONTACT_EMAIL environment variable or update the address below for real deployments.
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["arjun.mehta.dev@example.com"],
      replyTo: cleanEmail,
      subject: cleanSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff; color: #1f2937;">
          <h2 style="font-size: 20px; font-weight: 800; border-bottom: 2px solid #000000; padding-bottom: 10px; margin-top: 0; color: #000000; text-transform: uppercase; letter-spacing: 0.05em;">
            New Portfolio Inquiry
          </h2>
          <div style="margin-top: 20px; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong style="color: #374151;">Visitor Name:</strong> ${cleanName}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Visitor Email:</strong> <a href="mailto:${cleanEmail}" style="color: #000000; text-decoration: underline;">${cleanEmail}</a></p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Entered Subject:</strong> ${cleanSubject}</p>
          </div>
          <div style="margin-top: 25px; padding: 16px; background-color: #f9fafb; border-left: 4px solid #000000; border-radius: 4px; font-style: italic; white-space: pre-wrap; line-height: 1.6; color: #4b5563;">
            ${cleanMessage}
          </div>
          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #e5e7eb;" />
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-bottom: 0;">
            This email was sent securely via Next.js Route Handlers and Resend.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Internal Server error.";
    console.error("Internal Server Error in API Route:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
