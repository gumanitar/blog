import { create } from "zustand";

interface SearchState {
  input: string;
  query: string;
  setInput: (value: string) => void;
  setQuery: (value: string) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  input: "",
  query: "",
  setInput: (value) => set({ input: value }),
  setQuery: (value) => set({ query: value }),
}));
