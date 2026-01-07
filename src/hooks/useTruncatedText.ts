import { useMemo } from "react";

export function useTruncatedText(text: string, maxLength = 100): string {
  return useMemo(() => {
    if (!text) return "";

    if (text.length <= maxLength) return text;

    return text.slice(0, maxLength).trim() + "…";
  }, [text, maxLength]);
}
