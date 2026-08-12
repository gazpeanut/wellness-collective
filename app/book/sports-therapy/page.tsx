import Header from "@/components/Header";

export default function SportsTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            Sports Therapy
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Choose your appointment.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Select the type of sports therapy appointment you would like to book.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">
                Initial Assessment
              </h2>

              <p className="mt-3 leading-7 text-stone-600">
                A full assessment to understand your symptoms, movement,
                training history and treatment needs.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">
                Follow-up Treatment
              </h2>

              <p className="mt-3 leading-7 text-stone-600">
                Ongoing treatment and rehabilitation following your initial
                assessment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}