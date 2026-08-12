import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />
      
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            The Wellness Collective
          </p>

          <h1 className="font-display text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Move better.
            <br />
            Feel stronger.
            <br />
            <span className="italic text-[#6B7A6B]">Live well.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            Movement, strength, recovery and community for women through
            midlife and beyond.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-[#6B7A6B] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90">
              Book a Session
            </button>

            <button className="rounded-full border border-[#CFC8C1] bg-white px-7 py-3.5 text-sm font-medium text-[#1F1F1F] transition hover:bg-[#E4D9CF]">
              Explore Wellness
            </button>
          </div>

          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#DDD6CF] pt-8 text-sm text-stone-600">
            <span>Barre</span>
            <span>Personal Training</span>
            <span>Pilates</span>
            <span>Sports Therapy</span>
            <span>Menopause Support</span>
          </div>
        </div>
      </section>
    </main>
  );
}