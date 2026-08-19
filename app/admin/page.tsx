import Header from "@/components/Header";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const bookings = await prisma.booking.findMany();

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