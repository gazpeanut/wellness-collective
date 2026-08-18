import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      appointmentType,
      slot,
    } = body;

    if (!name || !email || !phone || !service || !slot) {
      return NextResponse.json(
        { error: "All booking fields are required." },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        name,
        email,
        phone,
        service,
        appointmentType: appointmentType ?? "",
        slot,
      },
    });

    return NextResponse.json(
      {
        message: "Booking created successfully.",
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Booking creation failed:", error);

    return NextResponse.json(
      { error: "Unable to create booking." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Unable to retrieve bookings:", error);

    return NextResponse.json(
      { error: "Unable to retrieve bookings." },
      { status: 500 }
    );
  }
}