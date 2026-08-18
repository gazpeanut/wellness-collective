"use client";

import { useState } from "react";
import Header from "@/components/Header";

const availableSlots = [
  {
    date: "Monday 17 August",
    times: ["11:00", "13:30", "16:00"],
  },
  {
    date: "Wednesday 19 August",
    times: ["09:00", "12:00", "15:30"],
  },
  {
    date: "Friday 21 August",
    times: ["10:00", "14:00", "17:00"],
  },
];

export default function SportsTherapyPage() {
  const [selectedSlot, setSelectedSlot] = useState("");

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

          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#6B7A6B]">
              Available appointments
            </p>

            <h2 className="mt-3 font-display text-3xl">
              Choose a time.
            </h2>

            <div className="mt-8 space-y-6">
              {availableSlots.map((day) => (
                <div
                  key={day.date}
                  className="rounded-3xl border border-[#DDD6CF] bg-white p-7"
                >
                  <h3 className="font-display text-xl">
                    {day.date}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {day.times.map((time) => (
                      <button
                        key={time}
                        onClick={() =>
                          setSelectedSlot(`${day.date} at ${time}`)
                        }
                        className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                          selectedSlot === `${day.date} at ${time}`
                            ? "border-[#6B7A6B] bg-[#6B7A6B] text-white"
                            : "border-[#CFC8C1] hover:border-[#6B7A6B] hover:bg-[#6B7A6B] hover:text-white"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedSlot && (
            <div className="mt-10 rounded-3xl bg-[#E4D9CF] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Your selection
              </p>

              <p className="mt-3 font-display text-2xl">
                {selectedSlot}
              </p>

              <a
                href={`/book/sports-therapy/confirm?slot=${encodeURIComponent(selectedSlot)}`}
                className="mt-6 inline-block rounded-full bg-[#6B7A6B] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Continue
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}