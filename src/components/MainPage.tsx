"use client";
import { useEffect } from "react";
import { useCharacterStore } from "../store/characterStore";
import Header from "./Header";
import Sidebar from "./Sidebar";
import CharacterList from "./CharacterList";
import Pagination from "./Pagination";
import { Character } from "../types";

interface MainPageProps {
  initialCharacters: Character[];
  maxPage: number;
  nextUrl: string | null;
  prevUrl: string | null;
}

function MainPage({
  initialCharacters,
  maxPage,
  nextUrl,
  prevUrl,
}: MainPageProps) {
  useEffect(() => {
    useCharacterStore.setState({
      characters: initialCharacters,
      maxPage: maxPage,
      nextUrl: nextUrl,
      prevUrl: prevUrl,
    });
  }, [initialCharacters, maxPage, nextUrl, prevUrl]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center">
      <Header />
      <div className="flex flex-col sm:flex-row w-full max-w-7xl mt-8 px-4">
        <aside className="w-full sm:w-1/4 bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg mr-6 sm:mb-0 mb-6 self-start">
          <Sidebar />
        </aside>
        <main className="flex-1">
          <CharacterList />
          <Pagination />
        </main>
      </div>
    </div>
  );
}

export default MainPage;
