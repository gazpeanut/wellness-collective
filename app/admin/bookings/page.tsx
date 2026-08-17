import BookingStatusControls from "@/components/BookingStatusControls";
import Header from "@/components/Header";
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
            View bookings made through The Collective.
          </p>

          <div className="mt-10 space-y-5">
            {bookings.length === 0 ? (
              <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
                <p className="text-stone-600">
                  No bookings have been made yet.
                </p>
              </div>
            ) : (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="rounded-3xl border border-[#DDD6CF] bg-white p-7"
                >
                  <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h2 className="font-display text-2xl">
                        {booking.name}
                      </h2>

                      <p className="mt-2 text-stone-600">
                        {booking.email}
                      </p>

                      <p className="text-stone-600">
                        {booking.phone}
                      </p>
                    </div>

                    <div className="md:text-right">
                      <p className="font-medium text-[#6B7A6B]">
                        {booking.service}
                      </p>

                      <p className="mt-2 text-stone-700">
                        {booking.slot}
                      </p>

                      <span className="mt-4 inline-block rounded-full bg-[#E4D9CF] px-3 py-1 text-xs font-medium text-[#6B7A6B]">
                        {booking.status}
                      </span>
                      <BookingStatusControls
                        bookingId={booking.id}
                        currentStatus={booking.status}
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}