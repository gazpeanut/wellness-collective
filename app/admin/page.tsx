import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalBookings = bookings.length;

  const personalTrainingBookings = bookings.filter(
    (booking) => booking.service === "Personal Training"
  ).length;

  const sportsTherapyBookings = bookings.filter(
    (booking) => booking.service === "Sports Therapy"
  ).length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const recentBookings = bookings.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            The Collective
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Admin
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Manage bookings and services across The Collective.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Total bookings
              </p>

              <p className="mt-4 font-display text-5xl">
                {totalBookings}
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Personal Training
              </p>

              <p className="mt-4 font-display text-5xl">
                {personalTrainingBookings}
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Sports Therapy
              </p>

              <p className="mt-4 font-display text-5xl">
                {sportsTherapyBookings}
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Pending
              </p>

              <p className="mt-4 font-display text-5xl">
                {pendingBookings}
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Confirmed
              </p>

              <p className="mt-4 font-display text-5xl">
                {confirmedBookings}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                  Recent activity
                </p>

                <h2 className="mt-2 font-display text-3xl">
                  Latest bookings
                </h2>
              </div>

              <a
                href="/admin/bookings"
                className="text-sm font-medium text-[#6B7A6B] hover:underline"
              >
                View all bookings
              </a>
            </div>

            <div className="mt-6 space-y-4">
              {recentBookings.length === 0 ? (
                <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
                  <p className="text-stone-600">
                    No bookings have been made yet.
                  </p>
                </div>
              ) : (
                recentBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="rounded-3xl border border-[#DDD6CF] bg-white p-6"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-display text-xl">
                          {booking.name}
                        </h3>

                        <p className="mt-1 text-sm text-stone-600">
                          {booking.service}
                          {booking.appointmentType
                            ? ` · ${booking.appointmentType}`
                            : ""}
                        </p>
                      </div>

                      <div className="md:text-right">
                        <p className="text-sm text-stone-700">
                          {booking.slot}
                        </p>

                        <span className="mt-2 inline-block rounded-full bg-[#E4D9CF] px-3 py-1 text-xs font-medium text-[#6B7A6B]">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="/admin/bookings"
              className="inline-block rounded-full bg-[#6B7A6B] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              Manage bookings
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}