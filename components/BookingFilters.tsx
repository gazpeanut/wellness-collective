"use client";

type BookingFiltersProps = {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

const filters = [
  "All",
  "Pending",
  "Confirmed",
  "Completed",
  "Cancelled",
];

export default function BookingFilters({
  currentFilter,
  onFilterChange,
}: BookingFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onFilterChange(filter)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            currentFilter === filter
              ? "bg-[#6B7A6B] text-white"
              : "border border-[#CFC8C1] bg-white text-stone-700 hover:border-[#6B7A6B]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}