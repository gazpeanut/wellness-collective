"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const selectedSlot =
    searchParams.get("slot") ?? "No appointment selected";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const formIsComplete =
    name.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "";

  async function handleConfirmBooking() {
    if (!formIsComplete || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: "Personal Training",
          slot: selectedSlot,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to create booking.");
      }

      setBookingConfirmed(true);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unable to create booking.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

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
            Please check your appointment and enter your details below.
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

          {!bookingConfirmed ? (
            <div className="mt-8 rounded-3xl border border-[#DDD6CF] bg-white p-7">
              <h2 className="font-display text-3xl">
                Your details
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-2xl border border-[#CFC8C1] bg-[#F8F6F3] px-4 py-3 outline-none focus:border-[#6B7A6B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-[#CFC8C1] bg-[#F8F6F3] px-4 py-3 outline-none focus:border-[#6B7A6B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="w-full rounded-2xl border border-[#CFC8C1] bg-[#F8F6F3] px-4 py-3 outline-none focus:border-[#6B7A6B]"
                  />
                </div>
              </div>

              {errorMessage && (
                <p className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={!formIsComplete || isSubmitting}
                className="mt-8 rounded-full bg-[#6B7A6B] px-7 py-3.5 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                {isSubmitting ? "Saving booking..." : "Confirm booking"}
              </button>
            </div>
          ) : (
            <div className="mt-8 rounded-3xl bg-[#E4D9CF] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
                Booking confirmed
              </p>

              <h2 className="mt-3 font-display text-3xl">
                You&apos;re booked in.
              </h2>

              <p className="mt-4 leading-7 text-stone-700">
                {name}, your Personal Training appointment is booked for{" "}
                {selectedSlot}.
              </p>

              <p className="mt-2 leading-7 text-stone-600">
                We&apos;ll eventually send confirmation details to {email}.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}