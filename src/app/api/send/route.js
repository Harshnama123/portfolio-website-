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
      from: "Harsh Portfolio <onboarding@resend.dev>",
      to: [fromEmail],
      reply_to: email,
      subject: `💼 Portfolio Inquiry: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #6366f1;">New Portfolio Contact Message</h2>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin-bottom: 15px;"><strong>From:</strong> ${email}</p>
                <p style="margin-bottom: 15px;"><strong>Subject:</strong> ${subject}</p>
                <div style="background-color: white; padding: 15px; border-radius: 4px;">
                  <p style="white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              <p style="color: #64748b; font-size: 14px;">This message was sent from your portfolio website contact form.</p>
            </div>
          </body>
        </html>
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
