"use client";

import { useState } from "react";
import Header from "@/components/Header";

const availableSlots = [
  {
    date: "Monday 17 August",
    isoDate: "2026-08-17",
    times: ["09:00", "10:30", "14:00"],
  },
  {
    date: "Tuesday 18 August",
    isoDate: "2026-08-18",
    times: ["08:30", "11:00", "16:30"],
  },
  {
    date: "Thursday 20 August",
    isoDate: "2026-08-20",
    times: ["09:30", "13:00", "17:00"],
  },
];

const appointmentTypes = [
  {
    name: "Initial Consultation",
    description:
      "A first session to discuss your goals, training history and current fitness.",
  },
  {
    name: "60 Minute PT Session",
    description:
      "A one-to-one training session tailored to your programme and goals.",
  },
];

export default function PersonalTrainingPage() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedStartTime, setSelectedStartTime] = useState("");

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
            {appointmentTypes.map((type) => (
              <button
                key={type.name}
                type="button"
                onClick={() => setSelectedType(type.name)}
                className={`rounded-3xl border p-7 text-left transition ${
                  selectedType === type.name
                    ? "border-[#6B7A6B] bg-[#E4D9CF]"
                    : "border-[#DDD6CF] bg-white"
                }`}
              >
                <h2 className="font-display text-2xl">{type.name}</h2>

                <p className="mt-3 leading-7 text-stone-600">
                  {type.description}
                </p>
              </button>
            ))}
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
                    {day.times.map((time) => {
                      const displaySlot = `${day.date} at ${time}`;
                      const isoStartTime = `${day.isoDate}T${time}:00`;

                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedSlot(displaySlot);
                            setSelectedStartTime(isoStartTime);
                          }}
                          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                            selectedSlot === displaySlot
                              ? "border-[#6B7A6B] bg-[#6B7A6B] text-white"
                              : "border-[#CFC8C1] hover:border-[#6B7A6B] hover:bg-[#6B7A6B] hover:text-white"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedType && selectedSlot && selectedStartTime && (
            <div className="mt-10 rounded-3xl bg-[#E4D9CF] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Your selection
              </p>

              <p className="mt-3 font-display text-2xl">
                {selectedType}
              </p>

              <p className="mt-2 text-stone-700">
                {selectedSlot}
              </p>

              <a
                href={`/book/personal-training/confirm?slot=${encodeURIComponent(
                  selectedSlot
                )}&type=${encodeURIComponent(
                  selectedType
                )}&startTime=${encodeURIComponent(selectedStartTime)}`}
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