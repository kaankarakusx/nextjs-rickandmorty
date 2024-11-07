import { create } from "zustand";
import { Character } from "../types";

interface CharacterStore {
  characters: Character[];
  currentPage: number;
  maxPage: number;
  nextUrl: string | null;
  prevUrl: string | null;
  setCharacters: (characters: Character[]) => void;
  setPage: (page: number) => void;
  setMaxPage: (value: number) => void;
  setNextUrl: (url: string | null) => void;
  setPrevUrl: (url: string | null) => void;
  status: string[];
  gender: string[];
  setStatus: (status: string[]) => void;
  setGender: (gender: string[]) => void;
  fetchCharacters: (
    status?: string[],
    gender?: string[],
    page?: number,
    pageUrl?: string
  ) => Promise<void>;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  characters: [],
  currentPage: 1,
  maxPage: 1,
  nextUrl: null,
  prevUrl: null,

  setCharacters: (characters) => set({ characters }),
  setPage: (page) => set({ currentPage: page }),
  setMaxPage: (value) => set({ maxPage: value }),
  setNextUrl: (url) => set({ nextUrl: url }),
  setPrevUrl: (url) => set({ prevUrl: url }),

  status: [],
  gender: [],

  setStatus: (status) => set({ status }),
  setGender: (gender) => set({ gender }),

  fetchCharacters: async (
    status = [],
    gender = [],
    page = 1,
    pageUrl?: string
  ) => {
    let url =
      pageUrl || `https://rickandmortyapi.com/api/character?page=${page}`;
    if (!pageUrl) {
      if (status.length > 0) {
        url += `&status=${status[0]}`;
      }
      if (gender.length > 0) {
        url += `&gender=${gender[0]}`;
      }
    }

    const res = await fetch(url);
    const data = await res.json();

    set({
      characters: data.results,
      maxPage: data.info.pages,
      nextUrl: data.info.next,
      prevUrl: data.info.prev,
    });
  },
}));
