"use client";

import { useState } from "react";
import BookingFilters from "@/components/BookingFilters";
import BookingStatusControls from "@/components/BookingStatusControls";

type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  appointmentType: string;
  slot: string;
  status: string;
};

type AdminBookingsListProps = {
  bookings: Booking[];
};

const services = [
  "All Services",
  "Personal Training",
  "Sports Therapy",
];

export default function AdminBookingsList({
  bookings,
}: AdminBookingsListProps) {
  const [currentFilter, setCurrentFilter] = useState("All");
  const [currentService, setCurrentService] = useState("All Services");

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      currentFilter === "All" ||
      booking.status === currentFilter;

    const matchesService =
      currentService === "All Services" ||
      booking.service === currentService;

    return matchesStatus && matchesService;
  });

  return (
    <>
      <div className="mt-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
          Status
        </p>

        <BookingFilters
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
      </div>

      <div className="mt-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#6B7A6B]">
          Service
        </p>

        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => setCurrentService(service)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                currentService === service
                  ? "bg-[#6B7A6B] text-white"
                  : "border border-[#CFC8C1] bg-white text-stone-700 hover:border-[#6B7A6B]"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-5">
        {filteredBookings.length === 0 ? (
          <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
            <p className="text-stone-600">
              No bookings match these filters.
            </p>
          </div>
        ) : (
          filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-3xl border border-[#DDD6CF] bg-white p-7"
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="font-display text-2xl">
                    {booking.name}
                  </h2>

                  <p className="mt-2 text-stone-600">
                    {booking.email}
                  </p>

                  <p className="text-stone-600">
                    {booking.phone}
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="font-medium text-[#6B7A6B]">
                    {booking.service}
                  </p>

                  {booking.appointmentType && (
                    <p className="mt-2 font-medium text-stone-800">
                      {booking.appointmentType}
                    </p>
                  )}

                  <p className="mt-2 text-stone-700">
                    {booking.slot}
                  </p>

                  <span className="mt-4 inline-block rounded-full bg-[#E4D9CF] px-3 py-1 text-xs font-medium text-[#6B7A6B]">
                    {booking.status}
                  </span>

                  <BookingStatusControls
                    bookingId={booking.id}
                    currentStatus={booking.status}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}