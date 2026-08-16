import Header from "@/components/Header";

export default function AccountPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            The Collective
          </p>

          <h1 className="font-display text-5xl leading-tight">
            My Account
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Your bookings, wellness profile and personalised support will live here.
          </p>

          <div className="mt-12 rounded-3xl border border-[#DDD6CF] bg-white p-7">
            <p className="text-sm uppercase tracking-[0.2em] text-[#6B7A6B]">
              Coming next
            </p>

            <h2 className="mt-3 font-display text-2xl">
              Your personal Wellness Collective space
            </h2>

            <p className="mt-3 leading-7 text-stone-600">
              We’ll add secure sign-in, your upcoming sessions and your personal
              wellness dashboard here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}