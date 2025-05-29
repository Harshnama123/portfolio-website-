import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    
    if (!email || !subject || !message) {
      console.error("Missing required fields:", { email, subject, message });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log configuration
    console.log("Email configuration:", {
      apiKeyExists: !!process.env.RESEND_API_KEY,
      fromEmail: process.env.FROM_EMAIL,
      recipientEmail: email
    });

    if (!process.env.RESEND_API_KEY || !fromEmail) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's default sender for now
      to: [fromEmail],
      reply_to: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h2>Message:</h2>
        <p>${message}</p>
      `
    });

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );    } catch (error) {
      console.error("Failed to send email:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }
}
