import Header from "@/components/Header";

type ConfirmPageProps = {
  searchParams: Promise<{
    slot?: string;
  }>;
};

export default async function ConfirmPage({
  searchParams,
}: ConfirmPageProps) {
  const params = await searchParams;
  const selectedSlot = params.slot ?? "No appointment selected";

  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F]">
      <Header />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.32em] text-[#6B7A6B]">
            Personal Training
          </p>

          <h1 className="font-display text-5xl leading-tight">
            Confirm your appointment.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Please check the appointment details below.
          </p>

          <div className="mt-10 rounded-3xl border border-[#DDD6CF] bg-white p-7">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
              Selected appointment
            </p>

            <p className="mt-3 font-display text-2xl">
              {selectedSlot}
            </p>

            <p className="mt-3 text-stone-600">
              Personal Training
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}