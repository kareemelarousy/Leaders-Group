import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // In a production app, you would:
    // 1. Save to database via Prisma
    // 2. Send email notification via SMTP or a service
    // 3. Send auto-reply to the user

    // For now, log the submission
    console.log("Contact form submission:", {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request." },
      { status: 500 }
    );
  }
}