import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import dns from "dns/promises";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function domainExists(email: string) {
  const domain = email.split("@")[1];
  if (!domain) return false;

  try {
    const records = await dns.resolveMx(domain);
    return records && records.length > 0;
  } catch {
    return false;
  }
}

function escapeHTML(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!(await domainExists(email))) {
      return NextResponse.json(
        { error: "Email domain does not exist" },
        { status: 400 }
      );
    }

    const safeName = escapeHTML(name);
    const safeEmail = escapeHTML(email);
    const safeMessage = escapeHTML(message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

await transporter.sendMail({
      from: `"DigiLabs Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Contact Message</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg, #4f46e5, #3b82f6); color:#ffffff; padding:20px 30px;">
              <h2 style="margin:0;">📩 New Contact Message</h2>
              <p style="margin:5px 0 0; font-size:14px; opacity:0.9;">DigiLabs Website</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:30px;">
              
              <p style="font-size:15px; color:#333;">You’ve received a new message from your website contact form:</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                
                <tr>
                  <td style="padding:10px 0; font-size:14px; color:#555;"><b>Name:</b></td>
                  <td style="padding:10px 0; font-size:14px; color:#111;">${name}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-size:14px; color:#555;"><b>Email:</b></td>
                  <td style="padding:10px 0; font-size:14px; color:#111;">${email}</td>
                </tr>

                <tr>
                  <td style="padding:10px 0; font-size:14px; color:#555;"><b>Message:</b></td>
                  <td style="padding:10px 0; font-size:14px; color:#111;">
                    <div style="background:#f9fafb; padding:15px; border-radius:6px; border:1px solid #e5e7eb;">
                      ${message}
                    </div>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <div style="margin-top:30px; text-align:center;">
                <a href="mailto:${email}" style="display:inline-block; padding:12px 20px; background:#4f46e5; color:#ffffff; text-decoration:none; border-radius:6px; font-size:14px;">
                  Reply to ${name}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f5f9; text-align:center; padding:15px; font-size:12px; color:#666;">
              © ${new Date().getFullYear()} DigiLabs. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}