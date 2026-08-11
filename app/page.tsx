export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-stone-600">
            The Wellness Collective
          </p>

          <h1 className="text-5xl font-light leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Move better.
            <br />
            Feel stronger.
            <br />
            <span className="font-medium">Live well.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
            A modern wellness community helping women feel stronger, healthier
            and more confident through every stage of life.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-full bg-stone-900 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-stone-700">
              Explore Wellness
            </button>

            <button className="rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-medium text-stone-900 transition hover:bg-stone-100">
              Book a Session
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
