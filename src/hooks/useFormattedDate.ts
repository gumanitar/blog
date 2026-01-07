import { useMemo } from "react";

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th";
  return daySuffixes[day % 10] || "th";
}
const daySuffixes: Record<number, string> = {
  1: "st",
  2: "nd",
  3: "rd",
};

export function useFormattedDate(dateString: string): string {
  return useMemo(() => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${month} ${day}${getDaySuffix(day)}, ${year}`;
  }, [dateString]);
}
