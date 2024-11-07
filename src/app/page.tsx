import MainPage from "../components/MainPage";
import { Character } from "../types";

export default async function HomePage() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  const initialCharacters: Character[] = data.results;
  const maxPage = data.info.pages;
  const nextUrl = data.info.next;
  const prevUrl = data.info.prev;

  return (
    <MainPage
      initialCharacters={initialCharacters}
      maxPage={maxPage}
      nextUrl={nextUrl}
      prevUrl={prevUrl}
    />
  );
}
