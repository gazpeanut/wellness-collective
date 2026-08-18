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
  slot: string;
  status: string;
};

type AdminBookingsListProps = {
  bookings: Booking[];
};

export default function AdminBookingsList({
  bookings,
}: AdminBookingsListProps) {
  const [currentFilter, setCurrentFilter] = useState("All");

  const filteredBookings =
    currentFilter === "All"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === currentFilter
        );

  return (
    <>
      <div className="mt-10">
        <BookingFilters
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
      </div>

      <div className="mt-8 space-y-5">
        {filteredBookings.length === 0 ? (
          <div className="rounded-3xl border border-[#DDD6CF] bg-white p-7">
            <p className="text-stone-600">
              No {currentFilter === "All" ? "" : currentFilter.toLowerCase()} bookings found.
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