import Header from "@/components/Header";

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            The Wellness Collective
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Wellness through midlife and beyond.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            Practical support for movement, strength, energy, recovery and the
            changes that can come with menopause.
          </p>
        </div>
      </section>
    </main>
  );
}