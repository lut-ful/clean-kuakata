"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-06-05T07:00:00+06:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    secs: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

type TimeLeft = ReturnType<typeof getTimeLeft> | null;

export default function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft>(null);

  useEffect(() => {
    const update = () => setTime(getTimeLeft());
    const initId = setTimeout(update, 0);
    const id = setInterval(update, 1000);
    return () => { clearTimeout(initId); clearInterval(id); };
  }, []);

  const units = [
    { value: time?.days, label: "Days" },
    { value: time?.hours, label: "Hours" },
    { value: time?.mins, label: "Mins" },
    { value: time?.secs, label: "Secs" },
  ];

  return (
    <div className="flex gap-3 justify-center">
      {units.map(({ value, label }) => (
        <div
          key={label}
          className="flex flex-col items-center bg-white/10 backdrop-blur-sm border border-sand/30 rounded-xl px-3 py-2.5 min-w-15.5 sm:px-4 sm:py-3 sm:min-w-18"
        >
          <span className="text-sand font-heading text-3xl md:text-4xl font-bold tabular-nums leading-none">
            {value === undefined ? "--" : String(value).padStart(2, "0")}
          </span>
          <span className="text-white/60 text-xs mt-1.5 uppercase tracking-widest">{label}</span>
        </div>
      ))}
    </div>
  );
}
