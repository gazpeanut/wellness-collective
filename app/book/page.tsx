import Header from "@/components/Header";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            The Collective
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Book a session.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Choose the service you would like to book.
          </p>

          <a href="/book/personal-training" className="block rounded-3xl border border-[#DDD6CF] bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="font-display text-2xl">Personal Training</h2>
          <p className="mt-3 leading-7 text-stone-600">
          One-to-one strength and fitness sessions tailored to your goals.
          </p>
          <p className="mt-6 text-sm font-medium text-[#6B7A6B]">
          View availability →
          </p>
          </a>

          <a href="/book/sports-therapy" className="block rounded-3xl border border-[#DDD6CF] bg-white p-7 transition hover:-translate-y-1 hover:shadow-md">
          <h2 className="font-display text-2xl">Sports Therapy</h2>
          <p className="mt-3 leading-7 text-stone-600">
          Assessment, treatment and recovery support for aches, injuries
          and movement issues.
          </p>

          <p className="mt-6 text-sm font-medium text-[#6B7A6B]">
          View availability →
          </p>
          </a>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">Barre</h2>
              <p className="mt-3 leading-7 text-stone-600">
                Low-impact classes focused on strength, control and posture.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">Pilates</h2>
              <p className="mt-3 leading-7 text-stone-600">
                Controlled movement sessions to improve strength, mobility and
                balance.
              </p>
            </div>
          </div>
      </section>
    </main>
  );
}