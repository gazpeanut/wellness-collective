import Header from "@/components/Header";

export default function PersonalTrainingPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            Personal Training
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Choose your session.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Select the type of personal training session you would like to book.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">Initial Consultation</h2>
              <p className="mt-3 leading-7 text-stone-600">
                A first session to discuss your goals, training history and
                current fitness.
              </p>
            </div>

            <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-2xl">60 Minute PT Session</h2>
              <p className="mt-3 leading-7 text-stone-600">
                A one-to-one training session tailored to your programme and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}