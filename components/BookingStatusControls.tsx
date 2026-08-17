"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type BookingStatusControlsProps = {
  bookingId: number;
  currentStatus: string;
};

const statuses = [
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
];

export default function BookingStatusControls({
  bookingId,
  currentStatus,
}: BookingStatusControlsProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);

  async function updateStatus(status: string) {
    if (status === currentStatus || isUpdating) {
      return;
    }

    setIsUpdating(true);

    try {
      const response = await fetch(`/api/bookings/${bookingId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to update booking status.");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Unable to update booking status.");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
      {statuses.map((status) => (
        <button
          key={status}
          type="button"
          onClick={() => updateStatus(status)}
          disabled={isUpdating || status === currentStatus}
          className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
            status === currentStatus
              ? "bg-[#6B7A6B] text-white"
              : "border border-[#CFC8C1] bg-white text-stone-700 hover:border-[#6B7A6B]"
          } disabled:cursor-not-allowed disabled:opacity-60`}
        >
          {status}
        </button>
      ))}
    </div>
  );
}