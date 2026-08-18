import Header from "@/components/Header";
import AdminBookingsList from "@/components/AdminBookingsList";
import { prisma } from "@/lib/prisma";

export default async function AdminBookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            Admin
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Bookings
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            View and manage bookings made through The Collective.
          </p>

          <AdminBookingsList bookings={bookings} />
        </div>
      </section>
    </main>
  );
}