import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate, IEmail } from "@/components/EmailTemplate";

// Plain-text alternative. Improves deliverability and gives clients that refuse
// HTML something readable.
const textVersion = ({ name, email, phoneNumber, message, sale }: IEmail) =>
  [
    "New Honeysuckles Inquiry",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phoneNumber ? `Phone Number: ${phoneNumber}` : null,
    sale && sale !== "None Selected" ? `Sale Request: ${sale}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

export async function POST(req: NextRequest) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = data?.name?.trim();
  const email = data?.email?.trim();
  const message = data?.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Constructed per-request on purpose: the Resend constructor throws on a
  // missing key, and at module scope that breaks `next build`.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.TO_EMAIL;

  if (!apiKey || !to) {
    console.error(
      `[contact] Missing config: ${!apiKey ? "RESEND_API_KEY " : ""}${!to ? "TO_EMAIL" : ""}`.trim()
    );
    return NextResponse.json(
      { message: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }

  const fields: IEmail = {
    name,
    email,
    message,
    phoneNumber: data?.phone?.trim() ?? "",
    sale: data?.sale,
  };

  const { error } = await new Resend(apiKey).emails.send({
    from: "onboarding@resend.dev",
    to,
    replyTo: email,
    subject: `Honeysuckles Inquiry from ${name}`,
    react: EmailTemplate(fields),
    text: textVersion(fields),
  });

  if (error) {
    // Log the provider detail server-side; never hand it to the client.
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { message: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Email Sent" }, { status: 200 });
}
