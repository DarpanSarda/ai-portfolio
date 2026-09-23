import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(254),
  message: z.string().trim().min(10).max(2000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return Response.json({ message: "Please check your name, email, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return Response.json(
      { message: "Email delivery is not configured yet. Please email darpansarda7@gmail.com directly." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { name, email, message } = result.data;
  const { error } = await resend.emails.send({
    from,
    to: "darpansarda7@gmail.com",
    replyTo: email,
    subject: `Portfolio enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Resend contact form error", error);
    return Response.json({ message: "Your message could not be sent. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ message: "Thanks. Your message has been sent." });
}